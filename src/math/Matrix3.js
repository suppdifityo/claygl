define(function(require) {

    'use strict';

    var glMatrix = require("glmatrix");
    var mat3 = glMatrix.mat3;

    function makeProperty(n) {
        return {
            configurable : false,
            set : function(value) {
                this._array[n] = value;
                this._dirty = true;
            },
            get : function() {
                return this._array[n];
            }
        }
    }

    var Matrix3 = function() {

        this._array = mat3.create();

        this._dirty = true;
    };

    Matrix3.prototype = {

        constructor : Matrix3,

        adjoint : function() {
            mat3.adjoint(this._array, this._array);
            this._dirty = true;
            return this;
        },
        clone : function() {
            return (new Matrix3()).copy(this);
        },
        copy : function(b) {
            mat3.copy(this._array, b._array);
            this._dirty = true;
            return this;
        },
        determinant : function() {
            return mat3.determinant(this._array);
        },
        fromMat2d : function(a) {
            mat3.fromMat2d(this._array, a._array);
            this._dirty = true;
            return this;
        },
        fromMat4 : function(a) {
            mat3.fromMat4(this._array, a._array);
            this._dirty = true;
            return this;
        },
        fromQuat : function(q) {
            mat3.fromQuat(this._array, q._array);
            this._dirty = true;
            return this;
        },
        identity : function() {
            mat3.identity(this._array);
            this._dirty = true;
            return this;
        },
        invert : function() {
            mat3.invert(this._array, this._array);
            this._dirty = true;
            return this;
        },
        mul : function(b) {
            mat3.mul(this._array, this._array, b._array);
            this._dirty = true;
            return this;
        },
        mulLeft : function(a) {
            mat3.mul(this._array, a._array, this._array);
            this._dirty = true;
            return this;
        },
        multiply : function(b) {
            mat3.multiply(this._array, this._array, b._array);
            this._dirty = true;
            return this;
        },
        multiplyLeft : function(a) {
            mat3.multiply(this._array, a._array, this._array);
            this._dirty = true;
            return this;
        },
        rotate : function(rad) {
            mat3.rotate(this._array, this._array, rad);
            this._dirty = true;
            return this;
        },
        scale : function(v) {
            mat3.scale(this._array, this._array, v._array);
            this._dirty = true;
            return this;
        },
        translate : function(v) {
            mat3.translate(this._array, this._array, v._array);
            this._dirty = true;
            return this;
        },
        /**
         * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
         */
        normalFromMat4 : function(a) {
            mat3.normalFromMat4(this._array, a._array);
            this._dirty = true;
            return this;
        },
        transpose : function() {
            mat3.transpose(this._array, this._array);
            this._dirty = true;
            return this;
        },
        toString : function() {
            return "[" + Array.prototype.join.call(this._array, ",") + "]";
        }
    }

    Matrix3.adjoint = function(out, a) {
        mat3.adjoint(out._array, a._array);
        out._dirty = true;
        return out;
    }

    Matrix3.copy = function(out, a) {
        mat3.copy(out._array, a._array);
        out._dirty = true;
        return out;
    }

    Matrix3.determinant = function(a) {
        return mat3.determinant(a._array);
    }

    Matrix3.identity = function(out) {
        mat3.identity(out._array);
        out._dirty = true;
        return out;
    }

    Matrix3.invert = function(out, a) {
        mat3.invert(out._array, a._array);
        return out;
    }

    Matrix3.mul = function(out, a, b) {
        mat3.mul(out._array, a._array, b._array);
        out._dirty = true;
        return out;
    }

    Matrix3.multiply = Matrix3.mul;

    Matrix3.fromMat2d = function(out, a) {
        mat3.fromMat2d(out._array, a._array);
        out._dirty = true;
        return out;
    }
    
    Matrix3.fromMat4 = function(out, a) {
        mat3.fromMat4(out._array, a._array);
        out._dirty = true;
        return out;
    }

    Matrix3.fromQuat = function(out, q) {
        mat3.fromQuat(out._array, q._array);
        out._dirty = true;
        return out;
    }

    Matrix3.normalFromMat4 = function(out, a) {
        mat3.normalFromMat4(out._array, a._array);
        out._dirty = true;
        return out;
    }

    Matrix3.rotate = function(out, a, rad) {
        mat3.rotate(out._array, a._array, rad);
        out._dirty = true;
        return out;
    }

    Matrix3.scale = function(out, a, v) {
        mat3.scale(out._array, a._array, v._array);
        out._dirty = true;
        return out;
    }

    Matrix3.transpose = function(out, a) {
        mat3.transpose(out._array, a._array);
        out._dirty = true;
        return out;
    }

    Matrix3.translate = function(out, a, v) {
        mat3.translate(out._array, a._array, v._array);
        out._dirty = true;
        return out;
    }

    return Matrix3;
})