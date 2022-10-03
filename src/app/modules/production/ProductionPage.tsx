import React from 'react'
import {Navigate, Route, Routes, Outlet} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {CycleDetailsTable} from "./components/tables/entries/CycleDetailsTable";
import {CycleGradeTable} from "./components/tables/entries/CycleGradeTable";
import {PlannedOutputTable} from "./components/tables/entries/PlannedOutputTable";
import {ProductionReportTable} from "./components/tables/report/ProductionReportTable";
import {FuelReportTable} from "./components/tables/report/FuelReportTable";
import {EquipmentTable} from "./components/tables/report/EquipmentTable";
import {StatisticsTable} from "./components/tables/report/StatisticsTable";

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Cycle Details',
    path: '/entries/cycle-details',
    isSeparator: false,
    isActive: false,
  },
  {
    title: 'Cycle Grade',
    path: '/entries/cycle-grade',
    isSeparator: true,
    isActive: false,
  },
  {
    title: 'Planned Output',
    path: '/entries/planned-output',
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
              <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle>
              {/*<Overview />*/}
              <CycleDetailsTable className='mb-5 mb-xl-8' />
            </>
          }
        />
        <Route
          path='cycle-grade'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Cycle Grade</PageTitle>
              <CycleGradeTable className='mb-5 mb-xl-8' />
            </>
          }
        />
        <Route
          path='planned-output'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Planned Output</PageTitle>
              <PlannedOutputTable className='mb-5 mb-xl-8' />
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
          path='cycle-details'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Overview</PageTitle>
              {/*<Overview />*/}
              <CycleDetailsTable className='mb-5 mb-xl-8' />
            </>
          }
        />
        <Route
          path='cycle-grade'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Cycle Grade</PageTitle>
              <CycleGradeTable className='mb-5 mb-xl-8' />
            </>
          }
        />
        <Route
          path='planned-output'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Planned Output</PageTitle>
              <PlannedOutputTable className='mb-5 mb-xl-8' />
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
              <ProductionReportTable className='mb-5 mb-xl-8' />
            </>
          }
        />
        <Route
          path='fuel-report'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Cycle Grade</PageTitle>
              <FuelReportTable className='mb-5 mb-xl-8' />
            </>
          }
        />
        <Route
          path='equipment-kpi'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Planned Output</PageTitle>
              <EquipmentTable className='mb-5 mb-xl-8' />
            </>
          }
        />
        <Route
          path='activity-statistics'
          element={
            <>
              <PageTitle breadcrumbs={accountBreadCrumbs}>Planned Output</PageTitle>
              <StatisticsTable className='mb-5 mb-xl-8' />
            </>
          }
        />
        <Route index element={<Navigate to='/dashboard' />} />
      </Route>
    </Routes>
  )
}

export default ProductionPage
