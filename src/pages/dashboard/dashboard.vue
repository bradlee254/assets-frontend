<script setup lang="ts">
import { ref, onMounted } from 'vue'
import{ getDashboardStats } from '../../services/dashboard'

const totalAssets = ref(0)
//const activeAssets = ref(0)
const assignedAssets = ref(0)
const maintenanceAssets = ref(0)
const retiredAssets = ref(0)
const lastSync = ref('')

onMounted(async () => {
  try {
    const stats = await getDashboardStats()
    totalAssets.value = stats.totalAssets
    assignedAssets.value = stats.assignedAssets
    maintenanceAssets.value = stats.maintenanceAssets
    retiredAssets.value = stats.retiredAssets
    lastSync.value = stats.lastSync
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
  }
  console.log('Dashboard stats loaded', {
    totalAssets: totalAssets.value,
    assignedAssets: assignedAssets.value,
    maintenanceAssets: maintenanceAssets.value,
    retiredAssets: retiredAssets.value,
    lastSync: lastSync.value
  })
})
</script>

<template>
  <div class="h-full bg-[#0f172a] p-8 text-slate-200 font-sans">
    <header class="mb-10 flex justify-between items-end">
      <div class="space-y-1">
        <h1 class="text-3xl font-bold tracking-tight text-white">System Dashboard</h1>
        <p class="text-slate-500 font-medium">Global Asset Management & Infrastructure</p>
      </div>
      <div class="text-right hidden md:block">
        <p class="text-xs uppercase tracking-widest text-slate-500 font-bold">Last Sync</p>
        <p class="text-sm font-mono text-indigo-400">{{ lastSync }}</p>
      </div>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <div class="bg-[#1e293b] border-l-4 border-indigo-500 p-6 rounded-r-lg shadow-sm">
        <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Total Assets</p>
        <div class="flex items-baseline gap-3">
          <h2 class="text-4xl font-bold text-white">{{ totalAssets }}</h2>
          <span class="text-xs font-bold px-2 py-0.5 bg-indigo-500/10 text-indigo-400 rounded">Active</span>
        </div>
        <p class="text-slate-500 text-xs mt-4 flex items-center gap-1">
          <span class="text-emerald-500 font-bold">+12%</span> vs previous month
        </p>
      </div>

      <div class="bg-[#1e293b] border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm">
        <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Assigned</p>
        <h2 class="text-4xl font-bold text-white">{{ assignedAssets }}</h2>
        <div class="w-full bg-slate-700 h-1.5 mt-4 rounded-full overflow-hidden">
          <div class="bg-blue-500 h-full w-[73%]"></div>
        </div>
        <p class="text-slate-500 text-xs mt-2">73.4% capacity utilized</p>
      </div>

      <div class="bg-[#1e293b] border-l-4 border-amber-500 p-6 rounded-r-lg shadow-sm">
        <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Maintenance</p>
        <h2 class="text-4xl font-bold text-white">{{ maintenanceAssets }}</h2>
        <p class="text-amber-500 text-xs mt-4 font-bold flex items-center gap-2">
          <span class="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
          Requires immediate attention
        </p>
      </div>

      <div class="bg-[#1e293b] border-l-4 border-slate-600 p-6 rounded-r-lg shadow-sm">
        <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Retired</p>
        <h2 class="text-4xl font-bold text-white">{{ retiredAssets }}</h2>
        <p class="text-slate-500 text-xs mt-4 font-medium italic">Decommissioned lifecycle</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2 bg-[#1e293b] rounded-xl border border-slate-800 overflow-hidden">
        <div class="p-6 border-b border-slate-800 flex justify-between items-center bg-[#1e293b]">
          <h3 class="font-bold text-lg text-white">Operational Activity</h3>
          <button class="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-widest">Full Log</button>
        </div>

        <div class="divide-y divide-slate-800">
          <div class="p-5 flex items-center justify-between hover:bg-slate-800/50 transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-2 h-10 bg-indigo-500 rounded-full"></div>
              <div>
                <p class="text-sm font-semibold text-white">Laptop Deployment: Unit LP-2024</p>
                <p class="text-xs text-slate-500">Assigned to Department: Engineering</p>
              </div>
            </div>
            <span class="text-[10px] font-mono text-slate-600">02:45 PM</span>
          </div>

          <div class="p-5 flex items-center justify-between hover:bg-slate-800/50 transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-2 h-10 bg-emerald-500 rounded-full"></div>
              <div>
                <p class="text-sm font-semibold text-white">Routine Maintenance Confirmed</p>
                <p class="text-xs text-slate-500">Asset PR-2024-034 verified by system</p>
              </div>
            </div>
            <span class="text-[10px] font-mono text-slate-600">11:20 AM</span>
          </div>

          <div class="p-5 flex items-center justify-between hover:bg-slate-800/50 transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-2 h-10 bg-slate-600 rounded-full"></div>
              <div>
                <p class="text-sm font-semibold text-white">License Lifecycle Update</p>
                <p class="text-xs text-slate-500">Microsoft Office 365 Enterprise renewal</p>
              </div>
            </div>
            <span class="text-[10px] font-mono text-slate-600">OCT 11</span>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="bg-indigo-600 p-6 rounded-xl shadow-lg shadow-indigo-900/20">
          <h3 class="text-white font-bold mb-4">Quick Control</h3>
          <div class="space-y-3">
            <button class="w-full py-3 bg-white text-indigo-700 rounded font-bold text-sm hover:bg-indigo-50 transition-all uppercase tracking-tight">
              Register New Asset
            </button>
            <button class="w-full py-3 bg-indigo-500 text-white rounded font-bold text-sm hover:bg-indigo-400 transition-all border border-indigo-400 uppercase tracking-tight">
              Generate Report
            </button>
          </div>
        </div>

        <div class="bg-[#1e293b] p-6 rounded-xl border border-slate-800">
          <div class="flex items-center justify-between mb-4">
            <span class="text-xs font-bold text-slate-500 uppercase">System Integrity</span>
            <span class="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">ONLINE</span>
          </div>
          <div class="space-y-4">
            <div class="flex justify-between text-xs">
              <span class="text-slate-400">Database Cluster</span>
              <span class="text-white font-mono">99.9%</span>
            </div>
            <div class="flex justify-between text-xs">
              <span class="text-slate-400">API Gateway</span>
              <span class="text-white font-mono">Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>