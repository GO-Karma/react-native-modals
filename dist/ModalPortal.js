Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="src\\ModalPortal.js";var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);var _BaseModal=require("./components/BaseModal");var _BaseModal2=_interopRequireDefault(_BaseModal);var _BottomModal=require("./components/BottomModal");var _BottomModal2=_interopRequireDefault(_BottomModal);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var modal=void 0;var ModalPortal=function(_React$Component){_inherits(ModalPortal,_React$Component);function ModalPortal(props){_classCallCheck(this,ModalPortal);var _this=_possibleConstructorReturn(this,(ModalPortal.__proto__||Object.getPrototypeOf(ModalPortal)).call(this,props));_initialiseProps.call(_this);_this.state={stack:[]};_this.id=0;modal=_this;return _this;}_createClass(ModalPortal,[{key:"render",value:function render(){return this.state.stack.map(this.renderModal);}},{key:"current",get:function get(){if(this.state.stack.length){return this.state.stack[this.state.stack.length-1].key;}}}],[{key:"show",value:function show(children,props){return modal.show(_extends({children:children},props));}},{key:"update",value:function update(key,props){modal.update(key,props);}},{key:"dismiss",value:function dismiss(key){modal.dismiss(key);}},{key:"dismissAll",value:function dismissAll(){modal.dismissAll();}},{key:"ref",get:function get(){return modal;}},{key:"size",get:function get(){return modal.state.stack.length;}}]);return ModalPortal;}(_react2.default.Component);var _initialiseProps=function _initialiseProps(){var _this2=this;this.generateKey=function(){return"modal-"+_this2.id++;};this.getIndex=function(key){return _this2.state.stack.findIndex(function(i){return i.key===key;});};this.getProps=function(props){var key=props.key||_this2.generateKey();return _extends({visible:true},props,{key:key});};this.show=function(props){var mergedProps=_this2.getProps(props);_this2.setState(function(_ref){var stack=_ref.stack;return{stack:stack.concat(mergedProps)};});return mergedProps.key;};this.update=function(key,props){var mergedProps=_this2.getProps(_extends({},props,{key:key}));_this2.setState(function(_ref2){var stack=_ref2.stack;var index=_this2.getIndex(key);stack[index]=_extends({},stack[index],mergedProps);return{stack:stack};});};this.dismiss=function(){var key=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_this2.current;if(!key)return;var props=_extends({},_this2.state.stack[_this2.getIndex(key)],{visible:false});_this2.update(key,props);};this.dismissAll=function(){return _this2.state.stack.forEach(function(_ref3){var key=_ref3.key;return _this2.dismiss(key);});};this.dismissHandler=function(key){var _state$stack$getIndex=_this2.state.stack[_this2.getIndex(key)].onDismiss,onDismiss=_state$stack$getIndex===undefined?function(){}:_state$stack$getIndex;_this2.setState(function(_ref4){var stack=_ref4.stack;return{stack:stack.filter(function(i){return i.key!==key;})};},onDismiss);};this.renderModal=function(_ref5){var _ref5$type=_ref5.type,type=_ref5$type===undefined?"modal":_ref5$type,props=_objectWithoutProperties(_ref5,["type"]);if(type==="modal"){return _react2.default.createElement(_BaseModal2.default,_extends({},props,{onDismiss:function onDismiss(){return _this2.dismissHandler(props.key);},__source:{fileName:_jsxFileName,lineNumber:89}}));}else if(type==="bottomModal"){return _react2.default.createElement(_BottomModal2.default,_extends({},props,{onDismiss:function onDismiss(){return _this2.dismissHandler(props.key);},__source:{fileName:_jsxFileName,lineNumber:96}}));}};};exports.default=ModalPortal;