<script setup>
import { ref } from 'vue'
import AppSidebar from './components/AppSidebar.vue'
import AppTopbar from './components/AppTopbar.vue'
import PanelCard from './components/PanelCard.vue'
import MetricCard from './components/MetricCard.vue'
import FormalChart from './components/FormalChart.vue'
import StatusList from './components/StatusList.vue'
import InsightPanel from './components/InsightPanel.vue'
import {
  AlertIcon,
  CropIcon,
  DashboardIcon,
  InventoryIcon,
  ProductionIcon,
  SalesIcon,
  SensorIcon,
  SettingsIcon,
  SparkIcon,
} from './components/icons/SidebarIcons.js'

const isSidebarOpen = ref(false)

const navSections = [
  {
    title: 'Principal',
    items: [
      { label: 'Inicio', meta: 'En vivo', icon: DashboardIcon, active: true },
      { label: 'Cultivos', meta: '24 lotes', icon: CropIcon },
      { label: 'Sensores', meta: '128 activos', icon: SensorIcon },
      { label: 'Alertas', meta: '3 criticas', icon: AlertIcon },
      { label: 'Inventario', meta: '92%', icon: InventoryIcon },
    ],
  },
  {
    title: 'Gestion',
    items: [
      { label: 'Produccion', meta: 'Semana', icon: ProductionIcon },
      { label: 'Ventas', meta: 'Empresas', icon: SalesIcon },
      { label: 'Analisis IA', meta: 'Asistente', icon: SparkIcon },
      { label: 'Configuracion', meta: 'Sistema', icon: SettingsIcon },
    ],
  },
]

const kpis = [
  { label: 'Temperatura promedio', value: '24.8 C', trend: 'Dentro del rango ideal' },
  { label: 'Humedad actual', value: '68%', trend: 'Lectura estable en 6 zonas' },
  { label: 'Produccion total', value: '12.4 t', trend: '+8.2% frente al mes pasado' },
]

const temperatureChart = {
  title: 'Temperatura',
  subtitle: 'Promedio diario por zona',
  labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
  values: [22, 24, 23, 25, 24, 26, 24],
  footer: 'Rango ideal: 22 C - 26 C',
  tone: 'primary',
  suffix: 'C',
}

const humidityChart = {
  title: 'Humedad',
  subtitle: 'Nivel promedio semanal',
  labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
  values: [74, 71, 67, 69, 64, 70, 68],
  footer: 'Objetivo operativo: 65% - 75%',
  tone: 'accent',
  suffix: '%',
}

const productionChart = {
  title: 'Produccion',
  subtitle: 'Toneladas proyectadas por semana',
  labels: ['S1', 'S2', 'S3', 'S4', 'S5'],
  values: [4.2, 5.1, 5.8, 6.7, 7.4],
  footer: 'Salida con crecimiento sostenido',
  tone: 'bar',
  suffix: 't',
}

const statusItems = [
  { zone: 'Zona A', status: 'OK', note: 'Clima y riego estables.', tone: 'ok' },
  { zone: 'Zona B', status: 'Alerta', note: 'Temperatura superior al objetivo.', tone: 'warning' },
  { zone: 'Zona C', status: 'Critico', note: 'Caida de humedad nocturna.', tone: 'critical' },
]

const insightLead =
  'Zona A requiere un ajuste ligero de riego. Conviene aumentar 15% y validar la siguiente lectura.'

const insightItems = [
  'Programar compra de fertilizante premium antes de cuatro dias.',
  'Mostrar solo alertas criticas y pendientes reales en la vista principal.',
]

const summaryMetrics = [
  { label: 'Sensores online', value: '128' },
  { label: 'Alertas abiertas', value: '03' },
]
</script>

<template>
  <div class="layout" :class="{ 'sidebar-visible': isSidebarOpen }">
    <div v-if="isSidebarOpen" class="sidebar-overlay" @click="isSidebarOpen = false"></div>

    <AppSidebar
      brand="TlalliCore"
      descriptor="Sistema Agricola Inteligente"
      :sections="navSections"
      :mobile-open="isSidebarOpen"
    />

    <main class="main-panel">
      <AppTopbar
        search-placeholder="Buscar cultivos, sensores, ventas o alertas..."
        @toggle-sidebar="isSidebarOpen = !isSidebarOpen"
      />

      <section class="hero">
        <PanelCard class="hero-copy" eyebrow="Panel principal" title="Informacion clara para decidir mas rapido.">
          <template #default>
            <p class="hero-text">
              El panel general ahora prioriza contexto, salud operativa y una recomendacion
              concreta, evitando saturacion visual y reduciendo el scroll innecesario.
            </p>
            <div class="hero-actions">
              <button class="button-primary">Ver operacion</button>
              <button class="button-secondary">Abrir modulos</button>
            </div>
          </template>
        </PanelCard>

        <PanelCard class="hero-summary" eyebrow="Operacion general" title="Estable">
          <template #default>
            <div class="summary-metrics">
              <article v-for="item in summaryMetrics" :key="item.label" class="summary-card">
                <small>{{ item.label }}</small>
                <strong>{{ item.value }}</strong>
              </article>
            </div>
          </template>
        </PanelCard>
      </section>

      <section class="kpi-grid">
        <MetricCard v-for="item in kpis" :key="item.label" :label="item.label" :value="item.value" :trend="item.trend" />
      </section>

      <section class="dashboard-grid">
        <PanelCard class="panel-wide" eyebrow="Analisis" title="Tendencias operativas" action-label="Ultimos 7 dias">
          <template #default>
            <div class="charts-grid">
              <FormalChart v-bind="temperatureChart" />
              <FormalChart v-bind="humidityChart" />
            </div>
          </template>
        </PanelCard>

        <PanelCard eyebrow="Produccion" title="Resumen semanal">
          <template #default>
            <div class="production-panel">
              <FormalChart v-bind="productionChart" />
            </div>
          </template>
        </PanelCard>

        <PanelCard eyebrow="Estado del sistema" title="Zonas y recomendacion">
          <template #default>
            <div class="stack-compact">
              <StatusList :items="statusItems" />
              <InsightPanel eyebrow="Analisis IA" title="Accion sugerida" :lead="insightLead" :items="insightItems" />
            </div>
          </template>
        </PanelCard>
      </section>
    </main>
  </div>
</template>
