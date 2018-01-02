/**
 * CalculatorServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of AddResponse
 *
 * @constructor
 */
angular.module('CalculatorServiceLib')
    .factory('AddResponse', ['BaseModel', AddResponseModel]);

    function AddResponseModel(BaseModel) {
        var AddResponse = function (obj) {
            if (obj === undefined || obj === null) {
                return;
            }
            this.result = this.getValue(obj.result);
        };

        AddResponse.prototype = new BaseModel();
        AddResponse.prototype.constructor = AddResponse;
    
        /**
         * Function containing information about the fields of this model
         * @return   {array}   Array of objects containing information about the fields
         */
        AddResponse.prototype.mappingInfo = function() {
            return BaseModel.prototype.mappingInfo.call(this).concat([
                { name: 'result', realName: 'result' }
            ]);
        };
    
        /**
         * Function containing information about discriminator values
         * mapped with their corresponding model class names
         *
         * @return   {object}  Object containing Key-Value pairs mapping discriminator
         *                     values with their corresponding model classes
         */
        AddResponse.prototype.discriminatorMap = function() {
            return {};
        };
    
        /**
         * TODO: Write general description for this method
         *
         * @return {int|null}
         */
        AddResponse.prototype.getResult = function () {
            return this.result;
        };
    
        /**
         * Setter for Result
         * 
         * @param {int|null} value 
         */
        AddResponse.prototype.setResult = function (value) {
            this.result = value;
        };
    
        return AddResponse;
    }

}(angular));
