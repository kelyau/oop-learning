//object.create
if(!Object.create){
    Object.create = (function(){
        var F = function(){}
	return function(o){
		F.prototype = o;
                return new F();
       }
    })();
}

function Class() {}


Class.prototype.extend = function () {};
Class.prototype.create = function () {};


Class.extend = function (props) {
    return this.prototype.extend.call(this, props);
}

Class.prototype.create = function (props) {

    var instance = new this();

    for (var name in props) {
        instance[name] = props[name];
    }
    return instance;
}

Class.prototype.extend = function (props) {

    var SubClass = function () {};

    SubClass.prototype = Object.create(this.prototype);

    for (var name in props) {
        SubClass.prototype[name] = props[name];
    }
    SubClass.prototype.constructor = SubClass;


    SubClass.extend = SubClass.prototype.extend;
    SubClass.create = SubClass.prototype.create;

    return SubClass;
}

