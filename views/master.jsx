var React = require('react');

var MasterLayout = React.createClass({

  siteTitle:"Invoicer",

  render: function(){
    return(
      <html lang="en">
      <head>
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.content}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <link rel="stylesheet" href="./public/css/main.css"/>
        <link rel="stylesheet" href="./public/css/main.css"/>
      </head>
      <body>
        <div className="all-wrap aid">

          <div className="top-wrap">
            <header>
              <h1>{this.siteTitle}</h1>
            </header>

            <nav>
              <ul>
                <li><a href="/" >New</a><span> |</span></li>
                <li><a href="/invoices" >Old</a></li>
              </ul>
            </nav>
          </div>
          <main className="main-wrap flex-row">

            {this.props.children}

          </main>

          <footer className="footer-wrap">
            <ul>
              <li>&copy; 2015</li>
              <li>{this.siteTitle}</li>
            </ul>
          </footer>

        </div>

      </body>
      </html>
    )
  }
});
module.exports = MasterLayout;