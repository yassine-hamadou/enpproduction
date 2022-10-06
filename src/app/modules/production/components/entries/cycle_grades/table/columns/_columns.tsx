// @ts-nocheck
import {Column} from 'react-table'
import {UserInfoCell} from './UserInfoCell'
import {UserLastLoginCell} from './UserLastLoginCell'
import {UserTwoStepsCell} from './UserTwoStepsCell'
import {UserActionsCell} from './UserActionsCell'
// import {UserSelectionCell} from './UserSelectionCell'
import {UserCustomHeader} from './UserCustomHeader'
// import {UserSelectionHeader} from './UserSelectionHeader'
import {User} from '../../core/_models'

const usersColumns: ReadonlyArray<Column<User>> = [
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='border-end text-start min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Date' className='border-end min-w-125px' />,
    accessor: 'date',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Shift' className='border-end min-w-125px' />,
    accessor: 'shift',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Loader' className='border-end min-w-125px' />,
    accessor: 'loader',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Hauler' className='border-end min-w-125px' />,
    accessor: 'Hauler',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Origin' className='border-end min-w-125px' />,
    accessor: 'Origin',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Material' className='min-w-125px' />,
    accessor: 'Material',
  },

]

export {usersColumns}
