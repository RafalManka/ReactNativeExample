import { Ids } from '../../../assets';


export const employeeUpdate = ({ prop, value }) => ({
  type: Ids.actions.employeeUpdate,
  payload: { prop, value }
});
