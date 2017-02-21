import React, { Component } from 'react';
import Dashboard from 'react-dazzle';

// App components
import Header from './Header';
import Container from './Container';
import WidgetContainer from './WidgetContainer';

// Widgets of the dashboard.
import Clock from './widgets/Clock';
import Temperature from './widgets/Temperature';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Widgets that are available in the dashboard
      widgets: {
        ClockWidget: {
          type: Clock,
        },
        TempWidget: {
          type: Temperature
        }
      },
      // Layout of the dashboard
      layout: {
        rows: [{
          columns: [{
            className: 'column is-4',
            widgets: [{key: 'ClockWidget'}],
          }, {
            className: 'column is-4',
            widgets: [{key: 'TempWidget'}],
          }],
        }],
      },
      editMode: true,
    };
  }

  /**
   * Toggeles edit mode in dashboard.
   */
  toggleEdit = () => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  /**
   * When a widget moved, this will be called. Layout should be given back.
   */
  onMove = (layout) => {
    this.setState({
      layout: layout,
    });
  }

  render() {
    return (
    <div>
      <Header />

      <Container>
        <Dashboard
          rowClass={"columns"}
          frameComponent={WidgetContainer}
          layout={this.state.layout}
          widgets={this.state.widgets}
          onMove={this.onMove}
          editable={this.state.editMode}
          />

      </Container>
    </div>
    );
  }
}

export default App;