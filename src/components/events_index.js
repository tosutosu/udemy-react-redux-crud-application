import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { readEvents } from '../actions'
import { DeviceGpsFixed } from 'material-ui/svg-icons';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, events => (
      <TableRow key={events.id}>
        <TableRowColumn>{events.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${events.id}`}>
            {events.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{events.body}</TableRowColumn>
      </TableRow>
    ));
  }

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    };

    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to="/events/new" />} >
          <ContentAdd />
        </FloatingActionButton>

        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>        
      </React.Fragment>
    );

  }
}

const mapStateToProps = state => ({ events: state.events });
const mapDispatchToProps = ({ readEvents });

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);

