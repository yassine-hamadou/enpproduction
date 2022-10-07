import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {CycleDetailsWrapper} from './components/entries/cycle_details/CycleDetailsList'
import {CycleGradeWrapper} from "./components/entries/cycle_grades/CycleDetailsList";
import {PlannedOutputTable} from "./components/entries/planned_output/CycleDetailsList";
import {ProductionReportTable} from "./components/report/production_table/CycleDetailsList";
import {FuelReportTable} from "./components/report/fuel/CycleDetailsList";
import {EquipmentTable} from "./components/report/equipment/CycleDetailsList";
import {StatisticsTable} from "./components/report/activity/CycleDetailsList";
import {LoaderOperator} from "./components/setup/loaderOperator/CycleDetailsList";
import {LoaderUnit} from "./components/setup/loaderUnit/CycleDetailsList";
import {HaulerOperator} from "./components/setup/haulerOperator/CycleDetailsList";
import {HaulerUnit} from "./components/setup/haulerUnit/CycleDetailsList";
import {MineArea} from "./components/setup/mine_care/CycleDetailsList";
import {Origin} from "./components/setup/origin/CycleDetailsList";
import {Destination} from "./components/setup/destination/CycleDetailsList";
import {MaterialRaw} from "./components/setup/materialRaw/CycleDetailsList";
import {ProcessedMaterial} from "./components/setup/materialProcessed/CycleDetailsList";
import {Activity} from "./components/setup/activity/CycleDetailsList";
import {Shift} from "./components/setup/shift/CycleDetailsList";

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
          path='loader/operator'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Loader Operator</PageTitle>
              {/*<Overview />*/}
              <LoaderOperator />
            </>
          }
        />
        <Route
          path='loader/unit'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Loader Unit</PageTitle>
              {/*<Overview />*/}
              <LoaderUnit />
            </>
          }
        />
        <Route
          path='hauler/operator'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Hauler Operator</PageTitle>
              <HaulerOperator />
            </>
          }
        />
        <Route
          path='hauler/unit'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Hauler Unit</PageTitle>
              <HaulerUnit />
            </>
          }
        />
        <Route
          path='mine-area'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Mine Area</PageTitle>
              <MineArea />
            </>
          }
        />
        <Route
          path='origin'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Origin</PageTitle>
              <Origin />
            </>
          }
        />
        <Route
          path='destination'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Destination</PageTitle>
              <Destination/>
            </>
          }
        />
        <Route
          path='raw-material'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Raw Material</PageTitle>
              <MaterialRaw />
            </>
          }
        />
        <Route
          path='processed-material'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Processed Material</PageTitle>
              <ProcessedMaterial />
            </>
          }
        />
        <Route
          path='activity'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Activity</PageTitle>
              <Activity />
            </>
          }
        />
        <Route
          path='shift'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Shift</PageTitle>
              <Shift />
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
