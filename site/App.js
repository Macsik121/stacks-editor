"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var theListOfUIwebTech = ['meArn', 'MEAN', 'MEVN', 'lamp'];

      function descriptionOfWEBstack(element, i) {
        var renderedElements = [];

        for (var _i = 0; _i < element.length; _i++) {
          if (element[_i] == 'M' || element[_i] == 'm') {
            renderedElements.push( /*#__PURE__*/React.createElement("li", null, "MongoDB"));
          } else if (element[_i] == 'E' || element[_i] == 'e') {
            renderedElements.push( /*#__PURE__*/React.createElement("li", null, "Express"));
          } else if (element[_i] == 'E' || element[_i] == 'e') {
            renderedElements.push( /*#__PURE__*/React.createElement("li", null, "Express"));
          } else if (element[_i] == 'R' || element[_i] == 'r') {
            renderedElements.push( /*#__PURE__*/React.createElement("li", null, "React"));
          } else if (element[_i] == 'A' || element[_i] == 'a') {
            renderedElements.push( /*#__PURE__*/React.createElement("li", null, "Angular"));
          } else if (element[_i] == 'V' || element[_i] == 'v') {
            renderedElements.push( /*#__PURE__*/React.createElement("li", null, "Vue"));
          } else if (element[_i] == 'E' || element[_i] == 'e') {
            renderedElements.push( /*#__PURE__*/React.createElement("li", null, "Express"));
          } else if (element[_i] == 'N' || element[_i] == 'n') {
            renderedElements.push( /*#__PURE__*/React.createElement("li", null, "Node.js"));
          } else if (element[_i] == 'L' || element[_i] == 'l') {
            renderedElements.push( /*#__PURE__*/React.createElement("li", null, "Linux"));
          } else if (element[_i] == 'P' || element[_i] == 'p') {
            renderedElements.push( /*#__PURE__*/React.createElement("li", null, "PHP"));
          }
        }

        renderedElements.map(function (e) {
          return /*#__PURE__*/React.createElement("li", null, e);
        });
        return renderedElements;
      } // handleKeyDown(e) {
      //     if (e.key == 'Enter') {
      //         console.log('Something from Handle key down function');
      //     }
      // }


      return /*#__PURE__*/React.createElement("div", {
        className: "wrapping"
      }, /*#__PURE__*/React.createElement("h2", {
        className: "list_title"
      }, "The listing of Web UI techniques"), /*#__PURE__*/React.createElement("ul", null, theListOfUIwebTech.map(function (element, i) {
        return /*#__PURE__*/React.createElement("li", {
          className: "framework",
          key: i
        }, /*#__PURE__*/React.createElement("span", {
          className: "listingNumber"
        }, ++i, "."), /*#__PURE__*/React.createElement("h3", {
          className: "web_title"
        }, element), /*#__PURE__*/React.createElement("div", {
          className: "description"
        }, /*#__PURE__*/React.createElement("ul", {
          className: "desc_list"
        }, descriptionOfWEBstack(element))));
      })));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('content'));