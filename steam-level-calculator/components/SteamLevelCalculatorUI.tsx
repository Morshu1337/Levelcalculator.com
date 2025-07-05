"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Users, LayoutTemplate, Ticket, Smile, PackagePlus, ShieldCheck, Zap } from "lucide-react"

function calculateSteamLevel(currentLevel: number, targetLevel: number) {
  if (currentLevel < 0) currentLevel = 0
  if (targetLevel > 10000) targetLevel = 10000
  if (targetLevel <= currentLevel) {
    return {
      level: currentLevel,
      xp: 0,
      sets: 0,
      cost: 0,
      friends: Math.min(250 + currentLevel * 5, 2000),
      showcases: Math.floor(currentLevel / 10),
      coupons: Math.floor(currentLevel),
      emotes: Math.floor(currentLevel / 2),
      booster: Math.floor(currentLevel / 10) * 20,
    }
  }
  const getTotalXP = (level: number) => {
    let xp = 0
    for (let i = 0; i < level; i++) {
      xp += 100 + Math.floor(i / 10) * 100
    }
    return xp
  }
  const currentXP = getTotalXP(currentLevel)
  const targetXP = getTotalXP(targetLevel)
  const xpRequired = targetXP - currentXP
  const sets = Math.ceil(xpRequired / 100)
  const pricePerSet = 0.326 + (targetLevel / 5000) * 0.02
  const cost = Number.parseFloat((sets * pricePerSet).toFixed(2))
  return {
    xp: xpRequired,
    sets,
    cost,
    friends: Math.min(250 + targetLevel * 5, 2000),
    showcases: Math.floor(targetLevel / 10),
    coupons: Math.floor(targetLevel),
    emotes: Math.floor(targetLevel / 2),
    booster: Math.floor(targetLevel / 10) * 20,
  }
}

type CalculationResult = ReturnType<typeof calculateSteamLevel>

export default function SteamLevelCalculatorUI() {
  const [currentLevel, setCurrentLevel] = useState(0)
  const [targetLevel, setTargetLevel] = useState(100)
  const [result, setResult] = useState<CalculationResult>(calculateSteamLevel(0, 100))

  const handleLevelChange =
    (setter: React.Dispatch<React.SetStateAction<number>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = Number.parseInt(e.target.value, 10)
      if (isNaN(value)) value = 0
      if (value > 10000) value = 10000
      setter(value)
    }

  useEffect(() => {
    const calculation = calculateSteamLevel(currentLevel, targetLevel)
    setResult(calculation)
  }, [currentLevel, targetLevel])

  return (
    <div className="max-w-md w-full mx-auto bg-slate-900 p-6 rounded-xl shadow-xl text-white space-y-6 border border-cyan-500/20">
      <div className="text-center space-y-1">
        <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
          <Zap className="text-cyan-400 w-7 h-7" />
          Steam Level Calculator
        </h1>
        <p className="text-slate-400 text-sm flex justify-center items-center gap-2">
          <ShieldCheck className="text-green-400 w-4 h-4" />
          Safe & Secure, No Login Needed
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <label htmlFor="current-level" className="block text-sm text-slate-300 font-medium">Current Level</label>
          <input
            id="current-level"
            type="number"
            placeholder="e.g. 50"
            value={currentLevel}
            onChange={handleLevelChange(setCurrentLevel)}
            max={10000}
            className="w-full bg-slate-800 border border-slate-700 text-slate-50 px-3 py-2 rounded text-center text-lg"
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="target-level" className="block text-sm text-slate-300 font-medium">Target Level</label>
          <input
            id="target-level"
            type="number"
            placeholder="e.g. 250"
            value={targetLevel}
            onChange={handleLevelChange(setTargetLevel)}
            max={10000}
            className="w-full bg-slate-800 border border-slate-700 text-slate-50 px-3 py-2 rounded text-center text-lg"
          />
        </div>
      </div>

      <div className="space-y-3 text-slate-300 border-t border-slate-700 pt-4">
        <p className="flex justify-between"><span>Required XP:</span><span className="text-cyan-400 font-mono">{result.xp.toLocaleString()}</span></p>
        <p className="flex justify-between"><span>Badge Sets:</span><span className="text-cyan-400 font-mono">{result.sets}</span></p>
        <p className="flex justify-between"><span>Estimated Cost:</span><span className="text-cyan-400 font-mono">${result.cost}</span></p>
      </div>

      <div className="border-t border-slate-700 pt-4">
        <h2 className="text-center text-lg font-semibold mb-4">Perks at Level {targetLevel}</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <Perk icon={Users} label="Friends Limit" value={result.friends.toLocaleString()} />
          <Perk icon={LayoutTemplate} label="Profile Showcases" value={result.showcases} />
          <Perk icon={Ticket} label="Store Coupons" value={result.coupons} />
          <Perk icon={Smile} label="Profile Emoticons" value={result.emotes} />
          <div className="col-span-2">
            <Perk icon={PackagePlus} label="Booster Pack Rate" value={`+${result.booster}%`} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Perk({ icon: Icon, label, value }: { icon: any, label: string, value: string | number }) {
  return (
    <div className="flex items-center space-x-3">
      <Icon className="text-cyan-500 w-5 h-5" />
      <div>
        <p className="text-slate-400">{label}</p>
        <p className="text-slate-100 font-semibold">{value}</p>
      </div>
    </div>
  )
}
