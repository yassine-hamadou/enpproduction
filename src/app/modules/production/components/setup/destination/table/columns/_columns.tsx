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
  // {
  //   Header: (props) => <UserSelectionHeader tableProps={props} />,
  //   id: 'selection',
  //   Cell: ({...props}) => <UserSelectionCell id={props.data[props.row.index].id} />,
  // },
  // {
  //   Header: (props) => <UserCustomHeader tableProps={props} title='Name' className='min-w-125px' />,
  //   id: 'name',
  //   Cell: ({...props}) => <UserInfoCell user={props.data[props.row.index]} />,
  // },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Date' className='min-w-125px' />,
    accessor: 'date',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Shift' className='min-w-125px' />,
    accessor: 'shift',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Time' className='min-w-125px' />,
    accessor: 'time',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Loader' className='min-w-125px' />,
    accessor: 'loader',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Hauler' className='min-w-125px' />,
    accessor: 'Hauler',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Origin' className='min-w-125px' />,
    accessor: 'Origin',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Material' className='min-w-125px' />,
    accessor: 'Material',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Destination' className='min-w-125px' />,
    accessor: 'Destination',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Nominal' className='min-w-125px' />,
    accessor: 'Nominal',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Weight' className='min-w-125px' />,
    accessor: 'Weight',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Payload Weight' className='min-w-125px' />,
    accessor: 'payload_weight',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Reported Weight' className='min-w-125px' />,
    accessor: 'reported_weight',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Volume' className='min-w-125px' />,
    accessor: 'Volume',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Loads' className='min-w-125px' />,
    accessor: 'Loads',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Time at loader' className='min-w-125px' />,
    accessor: 'time_at_loader',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Destination' className='min-w-125px' />,
    accessor: 'destination2',
  },
  {
    Header: (props) => <UserCustomHeader tableProps={props} title='Duration' className='min-w-125px' />,
    accessor: 'Duration',
  },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Last login' className='min-w-125px' />
  //   ),
  //   id: 'last_login',
  //   Cell: ({...props}) => <UserLastLoginCell last_login={props.data[props.row.index].last_login} />,
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Two steps' className='min-w-125px' />
  //   ),
  //   id: 'two_steps',
  //   Cell: ({...props}) => <UserTwoStepsCell two_steps={props.data[props.row.index].two_steps} />,
  // },
  // {
  //   Header: (props) => (
  //     <UserCustomHeader tableProps={props} title='Joined day' className='min-w-125px' />
  //   ),
  //   accessor: 'joined_day',
  // },
  {
    Header: (props) => (
      <UserCustomHeader tableProps={props} title='Actions' className='text-end min-w-100px' />
    ),
    id: 'actions',
    Cell: ({...props}) => <UserActionsCell id={props.data[props.row.index].id} />,
  },
]

export {usersColumns}