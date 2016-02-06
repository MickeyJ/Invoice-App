var React = require('react');
var DefaultLayout = require('./master');

var indexComponent = React.createClass({
  render: function(){
    return(

    <DefaultLayout
        title={this.props.title}
        name={this.props.name}
        content={this.props.content}>

      <section className="col2-3 box aid">

        <form name="invoiceForm" method="post" action="/getInvoice">
          <input type="text" name="service" id="service" placeholder="Service Provided"/>
          <input type="text" name="date" id="date" defaultValue={Date()}/>
          <input type="text" name="note" id="note" placeholder="Notes"/>
          <input type="text" name="pay" id="pay" placeholder="Hourly Pay"/>
          <input type="text" name="hours" id="hours" placeholder="Hours Worked"/>

          <input className="box-btn" type="submit" value="Create" />
        </form >
      </section>

      <section className="col1-3 box aid">
        <p id="sName">output data here</p>

        <p id="sDate"></p>
        <p id="sNote"></p>
        <p id="sPay"></p>
        <p id="sHrs"></p>
        <p id="sTotal"></p>

        <input className="box-btn" type="button" id="saveBtn" defaultValue="Save" />


      </section>
      <script type="text/javascript" src="./public/js/invoicer.js"></script>
    </DefaultLayout>

    )
  }

});
module.exports = indexComponent;