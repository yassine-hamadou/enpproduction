import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {CycleDetailsWrapper} from './components/entries/cycle_details/CycleDetailsList'
import {HaulerTable} from "./components/tables/setup/HaulerTable";
import {LoaderTable} from "./components/tables/setup/LoaderTable";
import {CycleGradeWrapper} from "./components/entries/cycle_grades/CycleDetailsList";
import {PlannedOutputTable} from "./components/entries/planned_output/CycleDetailsList";
import {ProductionReportTable} from "./components/report/production_table/CycleDetailsList";
import {FuelReportTable} from "./components/report/fuel/CycleDetailsList";
import {EquipmentTable} from "./components/report/equipment/CycleDetailsList";
import {StatisticsTable} from "./components/report/activity/CycleDetailsList";

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Cycle Details',
    path: '/cycle_details/cycle-details',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'Cycle Grade',
    path: '/cycle_details/cycle-grade',
    isSeparator: true,
    isActive: false,
  },
  {
    title: 'Planned Output',
    path: '/cycle_details/planned-output',
    isSeparator: true,
    isActive: false,
  },
]

const ProductionPage: React.FC = () => {
  return (
    <Routes>
      <Route
        path='/entries/*'
        element={
          <>
            {/*<ProductionHeader />*/}
            <Outlet />
          </>
        }
      >
        <Route
          path='cycle-details'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Cycle Details</PageTitle>
              {/*<Overview />*/}
              <CycleDetailsWrapper />
            </>
          }
        />
        <Route
          path='cycle-grade'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Cycle Grade</PageTitle>
              <CycleGradeWrapper />
            </>
          }
        />
        <Route
          path='planned-output'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Planned Output</PageTitle>
              <PlannedOutputTable />
            </>
          }
        />
        <Route index element={<Navigate to='/dashboard' />} />
      </Route>
      <Route
        path='/setup/*'
        element={
          <>
            {/*<ProductionHeader />*/}
            <Outlet />
          </>
        }
      >
        <Route
          path='loader'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle>
              {/*<Overview />*/}
              <LoaderTable className='mb-5 mb-xl-8' />
            </>
          }
        />
        <Route
          path='hauler'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Cycle Grade</PageTitle>
              <HaulerTable className='mb-5 mb-xl-8' />
            </>
          }
        />
        <Route
          path='mine-area'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Planned Output</PageTitle>
              {/*<PlannedOutputTable className='mb-5 mb-xl-8' />*/}
            </>
          }
        />
        <Route index element={<Navigate to='/dashboard' />} />
      </Route>
      <Route
        path='/report/*'
        element={
          <>
            {/*<ProductionHeader />*/}
            <Outlet />
          </>
        }
      >
        <Route
          path='production-report'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Production Report</PageTitle>
              {/*<Overview />*/}
              <ProductionReportTable />
            </>
          }
        />
        <Route
          path='fuel-report'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Fuel Report</PageTitle>
              <FuelReportTable />
            </>
          }
        />
        <Route
          path='equipment-kpi'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Equipment KPI</PageTitle>
              <EquipmentTable />
            </>
          }
        />
        <Route
          path='activity-statistics'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Activity Statistics</PageTitle>
              <StatisticsTable />
            </>
          }
        />
        <Route index element={<Navigate to='/dashboard' />} />
      </Route>
    </Routes>
  )
}

export default ProductionPage
