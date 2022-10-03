/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from "../../../../../../_metronic/helpers";

type Props = {
  className: string
}

const PlannedOutputTable: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        {/*<h3 className='card-title align-items-start flex-column'>*/}
        {/*  <span className='card-label fw-bold fs-3 mb-1'>New Arrivals</span>*/}
        {/*  <span className='text-muted mt-1 fw-semibold fs-7'>Over 500 new products</span>*/}
        {/*</h3>*/}
        <div className='card-toolbar'>
          <a href='src/app/modules/production/components/tables/entries/CycleDetailsTable#' className='btn btn-sm btn-light-primary'>
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            Add
          </a>
        </div>
        <div className='card-toolbar'>
          <a href='src/app/modules/production/components/tables/entries/CycleDetailsTable#' className='btn btn-sm btn-light-primary'>
            <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
            Upload
          </a>
        </div>

      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
            <tr className='fw-bold text-muted bg-light'>
              <th className='ps-4 min-w-325px rounded-start'>Destination</th>
              <th className='min-w-125px'>Activity</th>
              <th className='min-w-200px'>Quantity</th>
            </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-50px me-5'>
                    <img
                      src={toAbsoluteUrl('/media/stock/600x400/img-7.jpg')}
                      className=''
                      alt=''
                    />
                  </div>
                  <div className='d-flex justify-content-start flex-column'>
                    <a href='src/app/modules/production/components/tables/entries/CycleDetailsTable#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                      Telegram Development
                    </a>
                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        C#, ASP.NET, MS SQL
                      </span>
                  </div>
                </div>
              </td>
              <td>
                <a href='src/app/modules/production/components/tables/entries/CycleDetailsTable#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  $4,790
                </a>
                <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
              </td>
              <td>
                <a href='src/app/modules/production/components/tables/entries/CycleDetailsTable#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  $240
                </a>
                <span className='text-muted fw-semibold text-muted d-block fs-7'>Rejected</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-50px me-5'>
                    <img
                      src={toAbsoluteUrl('/media/stock/600x400/img-7.jpg')}
                      className=''
                      alt=''
                    />
                  </div>
                  <div className='d-flex justify-content-start flex-column'>
                    <a href='src/app/modules/production/components/tables/entries/CycleDetailsTable#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                      Telegram Development
                    </a>
                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        C#, ASP.NET, MS SQL
                      </span>
                  </div>
                </div>
              </td>
              <td>
                <a href='src/app/modules/production/components/tables/entries/CycleDetailsTable#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  $4,790
                </a>
                <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
              </td>
              <td>
                <a href='src/app/modules/production/components/tables/entries/CycleDetailsTable#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  $240
                </a>
                <span className='text-muted fw-semibold text-muted d-block fs-7'>Rejected</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-50px me-5'>
                    <img
                      src={toAbsoluteUrl('/media/stock/600x400/img-7.jpg')}
                      className=''
                      alt=''
                    />
                  </div>
                  <div className='d-flex justify-content-start flex-column'>
                    <a href='src/app/modules/production/components/tables/entries/CycleDetailsTable#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                      Telegram Development
                    </a>
                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        C#, ASP.NET, MS SQL
                      </span>
                  </div>
                </div>
              </td>
              <td>
                <a href='src/app/modules/production/components/tables/entries/CycleDetailsTable#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  $4,790
                </a>
                <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
              </td>
              <td>
                <a href='src/app/modules/production/components/tables/entries/CycleDetailsTable#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  $240
                </a>
                <span className='text-muted fw-semibold text-muted d-block fs-7'>Rejected</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-50px me-5'>
                    <img
                      src={toAbsoluteUrl('/media/stock/600x400/img-7.jpg')}
                      className=''
                      alt=''
                    />
                  </div>
                  <div className='d-flex justify-content-start flex-column'>
                    <a href='src/app/modules/production/components/tables/entries/CycleDetailsTable#' className='text-dark fw-bold text-hover-primary mb-1 fs-6'>
                      Telegram Development
                    </a>
                    <span className='text-muted fw-semibold text-muted d-block fs-7'>
                        C#, ASP.NET, MS SQL
                      </span>
                  </div>
                </div>
              </td>
              <td>
                <a href='src/app/modules/production/components/tables/entries/CycleDetailsTable#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  $4,790
                </a>
                <span className='text-muted fw-semibold text-muted d-block fs-7'>Paid</span>
              </td>
              <td>
                <a href='src/app/modules/production/components/tables/entries/CycleDetailsTable#' className='text-dark fw-bold text-hover-primary d-block mb-1 fs-6'>
                  $240
                </a>
                <span className='text-muted fw-semibold text-muted d-block fs-7'>Rejected</span>
              </td>
            </tr>


            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {PlannedOutputTable}
