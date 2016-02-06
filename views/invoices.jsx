var React = require('react');
var DefaultLayout = require('./master')

var invoicesComponent = React.createClass({
  render: function(){
    return(
      <DefaultLayout
      title={this.props.title}
      name={this.props.name}
      content={this.props.content}>

        <section className="col1-2 box aid">
          <p>existing invoices will display here</p>
          <input className="box-btn" type="button" id="sendBtn" defaultValue="Send" />
        </section>

      </DefaultLayout>
    )
  }
});
module.exports = invoicesComponent;