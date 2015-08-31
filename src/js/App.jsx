//var IntlMixin       = ReactIntl.IntlMixin;
//var FormattedNumber = ReactIntl.FormattedNumber;
//
//var App = React.createClass({
//    mixins: [IntlMixin],
//
//    render: function () {
//        return (
//            <p>
//                <FormattedNumber value={1000} style="currency" currency="USD" />
//            </p>
//        );
//    }
//});
//
//module.exports = App;

var React = require('react'),
    Hello = require('./Hello');

var App = React.createClass({
  render(){
    return (
      <div>
        <Hello />
        <div>Foo</div>
      </div>
    );
  }
});
module.exports = App;
