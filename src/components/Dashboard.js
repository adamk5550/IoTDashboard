import React, { Component } from 'react';
import Dashboard from 'react-dazzle';

// App components
import Header from './Header';
import Container from './Container';
import WidgetContainer from './WidgetContainer';

// Widgets of the dashboard.
import BarChart from './widgets/BarChart';
import Temperature from './widgets/Temperature';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Widgets that are available in the dashboard
      widgets: {
        EngineWidget: {
          type: BarChart,
          title: 'Engine',
        },
        TempWidget: {
          type: Temperature,
          title: 'Cats',
        }
      },
      // Layout of the dashboard
      layout: {
        rows: [{
          columns: [{
            className: 'column is-6',
            widgets: [{key: 'EngineWidget'}],
          }, {
            className: 'column is-6',
            widgets: [{key: 'TempWidget'}],
          }],
        }],
      }
    };
  }

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
    <Container>
      <Header />
      <Dashboard
        rowClass={"columns"}
        frameComponent={WidgetContainer}
        onRemove={this.onRemove}
        layout={this.state.layout}
        widgets={this.state.widgets}
        onMove={this.onMove}
        />

    </Container>
    );
  }
}

export default App;