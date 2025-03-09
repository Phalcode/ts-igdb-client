/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.proto = (function() {
    
        /**
         * Namespace proto.
         * @exports proto
         * @namespace
         */
        var proto = {};
    
        proto.Count = (function() {
    
            /**
             * Properties of a Count.
             * @memberof proto
             * @interface ICount
             * @property {number|null} [count] Count count
             */
    
            /**
             * Constructs a new Count.
             * @memberof proto
             * @classdesc Represents a Count.
             * @implements ICount
             * @constructor
             * @param {proto.ICount=} [properties] Properties to set
             */
            function Count(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Count count.
             * @member {number} count
             * @memberof proto.Count
             * @instance
             */
            Count.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Gets the default type url for Count
             * @function getTypeUrl
             * @memberof proto.Count
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Count.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Count";
            };
    
            return Count;
        })();
    
        proto.MultiQueryResult = (function() {
    
            /**
             * Properties of a MultiQueryResult.
             * @memberof proto
             * @interface IMultiQueryResult
             * @property {string|null} [name] MultiQueryResult name
             * @property {Array.<Uint8Array>|null} [results] MultiQueryResult results
             * @property {number|null} [count] MultiQueryResult count
             */
    
            /**
             * Constructs a new MultiQueryResult.
             * @memberof proto
             * @classdesc Represents a MultiQueryResult.
             * @implements IMultiQueryResult
             * @constructor
             * @param {proto.IMultiQueryResult=} [properties] Properties to set
             */
            function MultiQueryResult(properties) {
                this.results = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MultiQueryResult name.
             * @member {string} name
             * @memberof proto.MultiQueryResult
             * @instance
             */
            MultiQueryResult.prototype.name = "";
    
            /**
             * MultiQueryResult results.
             * @member {Array.<Uint8Array>} results
             * @memberof proto.MultiQueryResult
             * @instance
             */
            MultiQueryResult.prototype.results = $util.emptyArray;
    
            /**
             * MultiQueryResult count.
             * @member {number} count
             * @memberof proto.MultiQueryResult
             * @instance
             */
            MultiQueryResult.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
            /**
             * Gets the default type url for MultiQueryResult
             * @function getTypeUrl
             * @memberof proto.MultiQueryResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MultiQueryResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.MultiQueryResult";
            };
    
            return MultiQueryResult;
        })();
    
        proto.MultiQueryResultArray = (function() {
    
            /**
             * Properties of a MultiQueryResultArray.
             * @memberof proto
             * @interface IMultiQueryResultArray
             * @property {Array.<proto.IMultiQueryResult>|null} [result] MultiQueryResultArray result
             */
    
            /**
             * Constructs a new MultiQueryResultArray.
             * @memberof proto
             * @classdesc Represents a MultiQueryResultArray.
             * @implements IMultiQueryResultArray
             * @constructor
             * @param {proto.IMultiQueryResultArray=} [properties] Properties to set
             */
            function MultiQueryResultArray(properties) {
                this.result = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MultiQueryResultArray result.
             * @member {Array.<proto.IMultiQueryResult>} result
             * @memberof proto.MultiQueryResultArray
             * @instance
             */
            MultiQueryResultArray.prototype.result = $util.emptyArray;
    
            /**
             * Gets the default type url for MultiQueryResultArray
             * @function getTypeUrl
             * @memberof proto.MultiQueryResultArray
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MultiQueryResultArray.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.MultiQueryResultArray";
            };
    
            return MultiQueryResultArray;
        })();
    
        proto.AgeRatingResult = (function() {
    
            /**
             * Properties of an AgeRatingResult.
             * @memberof proto
             * @interface IAgeRatingResult
             * @property {Array.<proto.IAgeRating>|null} [ageratings] AgeRatingResult ageratings
             */
    
            /**
             * Constructs a new AgeRatingResult.
             * @memberof proto
             * @classdesc Represents an AgeRatingResult.
             * @implements IAgeRatingResult
             * @constructor
             * @param {proto.IAgeRatingResult=} [properties] Properties to set
             */
            function AgeRatingResult(properties) {
                this.ageratings = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AgeRatingResult ageratings.
             * @member {Array.<proto.IAgeRating>} ageratings
             * @memberof proto.AgeRatingResult
             * @instance
             */
            AgeRatingResult.prototype.ageratings = $util.emptyArray;
    
            /**
             * Gets the default type url for AgeRatingResult
             * @function getTypeUrl
             * @memberof proto.AgeRatingResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AgeRatingResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.AgeRatingResult";
            };
    
            return AgeRatingResult;
        })();
    
        proto.AgeRating = (function() {
    
            /**
             * Properties of an AgeRating.
             * @memberof proto
             * @interface IAgeRating
             * @property {number|null} [id] AgeRating id
             * @property {proto.AgeRatingCategoryEnum|null} [category] AgeRating category
             * @property {Array.<proto.IAgeRatingContentDescription>|null} [content_descriptions] AgeRating content_descriptions
             * @property {proto.AgeRatingRatingEnum|null} [rating] AgeRating rating
             * @property {string|null} [rating_cover_url] AgeRating rating_cover_url
             * @property {string|null} [synopsis] AgeRating synopsis
             * @property {string|null} [checksum] AgeRating checksum
             * @property {proto.IAgeRatingOrganization|null} [organization] AgeRating organization
             * @property {proto.IAgeRatingCategory|null} [rating_category] AgeRating rating_category
             * @property {Array.<proto.IAgeRatingContentDescriptionV2>|null} [rating_content_descriptions] AgeRating rating_content_descriptions
             */
    
            /**
             * Constructs a new AgeRating.
             * @memberof proto
             * @classdesc Represents an AgeRating.
             * @implements IAgeRating
             * @constructor
             * @param {proto.IAgeRating=} [properties] Properties to set
             */
            function AgeRating(properties) {
                this.content_descriptions = [];
                this.rating_content_descriptions = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AgeRating id.
             * @member {number} id
             * @memberof proto.AgeRating
             * @instance
             */
            AgeRating.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * AgeRating category.
             * @member {proto.AgeRatingCategoryEnum} category
             * @memberof proto.AgeRating
             * @instance
             */
            AgeRating.prototype.category = 0;
    
            /**
             * AgeRating content_descriptions.
             * @member {Array.<proto.IAgeRatingContentDescription>} content_descriptions
             * @memberof proto.AgeRating
             * @instance
             */
            AgeRating.prototype.content_descriptions = $util.emptyArray;
    
            /**
             * AgeRating rating.
             * @member {proto.AgeRatingRatingEnum} rating
             * @memberof proto.AgeRating
             * @instance
             */
            AgeRating.prototype.rating = 0;
    
            /**
             * AgeRating rating_cover_url.
             * @member {string} rating_cover_url
             * @memberof proto.AgeRating
             * @instance
             */
            AgeRating.prototype.rating_cover_url = "";
    
            /**
             * AgeRating synopsis.
             * @member {string} synopsis
             * @memberof proto.AgeRating
             * @instance
             */
            AgeRating.prototype.synopsis = "";
    
            /**
             * AgeRating checksum.
             * @member {string} checksum
             * @memberof proto.AgeRating
             * @instance
             */
            AgeRating.prototype.checksum = "";
    
            /**
             * AgeRating organization.
             * @member {proto.IAgeRatingOrganization|null|undefined} organization
             * @memberof proto.AgeRating
             * @instance
             */
            AgeRating.prototype.organization = null;
    
            /**
             * AgeRating rating_category.
             * @member {proto.IAgeRatingCategory|null|undefined} rating_category
             * @memberof proto.AgeRating
             * @instance
             */
            AgeRating.prototype.rating_category = null;
    
            /**
             * AgeRating rating_content_descriptions.
             * @member {Array.<proto.IAgeRatingContentDescriptionV2>} rating_content_descriptions
             * @memberof proto.AgeRating
             * @instance
             */
            AgeRating.prototype.rating_content_descriptions = $util.emptyArray;
    
            /**
             * Gets the default type url for AgeRating
             * @function getTypeUrl
             * @memberof proto.AgeRating
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AgeRating.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.AgeRating";
            };
    
            return AgeRating;
        })();
    
        /**
         * AgeRatingCategoryEnum enum.
         * @name proto.AgeRatingCategoryEnum
         * @enum {number}
         * @property {number} AGERATING_CATEGORY_NULL=0 AGERATING_CATEGORY_NULL value
         * @property {number} ESRB=1 ESRB value
         * @property {number} PEGI=2 PEGI value
         * @property {number} CERO=3 CERO value
         * @property {number} USK=4 USK value
         * @property {number} GRAC=5 GRAC value
         * @property {number} CLASS_IND=6 CLASS_IND value
         * @property {number} ACB=7 ACB value
         */
        proto.AgeRatingCategoryEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AGERATING_CATEGORY_NULL"] = 0;
            values[valuesById[1] = "ESRB"] = 1;
            values[valuesById[2] = "PEGI"] = 2;
            values[valuesById[3] = "CERO"] = 3;
            values[valuesById[4] = "USK"] = 4;
            values[valuesById[5] = "GRAC"] = 5;
            values[valuesById[6] = "CLASS_IND"] = 6;
            values[valuesById[7] = "ACB"] = 7;
            return values;
        })();
    
        /**
         * AgeRatingRatingEnum enum.
         * @name proto.AgeRatingRatingEnum
         * @enum {number}
         * @property {number} AGERATING_RATING_NULL=0 AGERATING_RATING_NULL value
         * @property {number} THREE=1 THREE value
         * @property {number} SEVEN=2 SEVEN value
         * @property {number} TWELVE=3 TWELVE value
         * @property {number} SIXTEEN=4 SIXTEEN value
         * @property {number} EIGHTEEN=5 EIGHTEEN value
         * @property {number} RP=6 RP value
         * @property {number} EC=7 EC value
         * @property {number} E=8 E value
         * @property {number} E10=9 E10 value
         * @property {number} T=10 T value
         * @property {number} M=11 M value
         * @property {number} AO=12 AO value
         * @property {number} CERO_A=13 CERO_A value
         * @property {number} CERO_B=14 CERO_B value
         * @property {number} CERO_C=15 CERO_C value
         * @property {number} CERO_D=16 CERO_D value
         * @property {number} CERO_Z=17 CERO_Z value
         * @property {number} USK_0=18 USK_0 value
         * @property {number} USK_6=19 USK_6 value
         * @property {number} USK_12=20 USK_12 value
         * @property {number} USK_16=21 USK_16 value
         * @property {number} USK_18=22 USK_18 value
         * @property {number} GRAC_ALL=23 GRAC_ALL value
         * @property {number} GRAC_TWELVE=24 GRAC_TWELVE value
         * @property {number} GRAC_FIFTEEN=25 GRAC_FIFTEEN value
         * @property {number} GRAC_EIGHTEEN=26 GRAC_EIGHTEEN value
         * @property {number} GRAC_TESTING=27 GRAC_TESTING value
         * @property {number} CLASS_IND_L=28 CLASS_IND_L value
         * @property {number} CLASS_IND_TEN=29 CLASS_IND_TEN value
         * @property {number} CLASS_IND_TWELVE=30 CLASS_IND_TWELVE value
         * @property {number} CLASS_IND_FOURTEEN=31 CLASS_IND_FOURTEEN value
         * @property {number} CLASS_IND_SIXTEEN=32 CLASS_IND_SIXTEEN value
         * @property {number} CLASS_IND_EIGHTEEN=33 CLASS_IND_EIGHTEEN value
         * @property {number} ACB_G=34 ACB_G value
         * @property {number} ACB_PG=35 ACB_PG value
         * @property {number} ACB_M=36 ACB_M value
         * @property {number} ACB_MA15=37 ACB_MA15 value
         * @property {number} ACB_R18=38 ACB_R18 value
         * @property {number} ACB_RC=39 ACB_RC value
         */
        proto.AgeRatingRatingEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AGERATING_RATING_NULL"] = 0;
            values[valuesById[1] = "THREE"] = 1;
            values[valuesById[2] = "SEVEN"] = 2;
            values[valuesById[3] = "TWELVE"] = 3;
            values[valuesById[4] = "SIXTEEN"] = 4;
            values[valuesById[5] = "EIGHTEEN"] = 5;
            values[valuesById[6] = "RP"] = 6;
            values[valuesById[7] = "EC"] = 7;
            values[valuesById[8] = "E"] = 8;
            values[valuesById[9] = "E10"] = 9;
            values[valuesById[10] = "T"] = 10;
            values[valuesById[11] = "M"] = 11;
            values[valuesById[12] = "AO"] = 12;
            values[valuesById[13] = "CERO_A"] = 13;
            values[valuesById[14] = "CERO_B"] = 14;
            values[valuesById[15] = "CERO_C"] = 15;
            values[valuesById[16] = "CERO_D"] = 16;
            values[valuesById[17] = "CERO_Z"] = 17;
            values[valuesById[18] = "USK_0"] = 18;
            values[valuesById[19] = "USK_6"] = 19;
            values[valuesById[20] = "USK_12"] = 20;
            values[valuesById[21] = "USK_16"] = 21;
            values[valuesById[22] = "USK_18"] = 22;
            values[valuesById[23] = "GRAC_ALL"] = 23;
            values[valuesById[24] = "GRAC_TWELVE"] = 24;
            values[valuesById[25] = "GRAC_FIFTEEN"] = 25;
            values[valuesById[26] = "GRAC_EIGHTEEN"] = 26;
            values[valuesById[27] = "GRAC_TESTING"] = 27;
            values[valuesById[28] = "CLASS_IND_L"] = 28;
            values[valuesById[29] = "CLASS_IND_TEN"] = 29;
            values[valuesById[30] = "CLASS_IND_TWELVE"] = 30;
            values[valuesById[31] = "CLASS_IND_FOURTEEN"] = 31;
            values[valuesById[32] = "CLASS_IND_SIXTEEN"] = 32;
            values[valuesById[33] = "CLASS_IND_EIGHTEEN"] = 33;
            values[valuesById[34] = "ACB_G"] = 34;
            values[valuesById[35] = "ACB_PG"] = 35;
            values[valuesById[36] = "ACB_M"] = 36;
            values[valuesById[37] = "ACB_MA15"] = 37;
            values[valuesById[38] = "ACB_R18"] = 38;
            values[valuesById[39] = "ACB_RC"] = 39;
            return values;
        })();
    
        proto.AgeRatingCategoryResult = (function() {
    
            /**
             * Properties of an AgeRatingCategoryResult.
             * @memberof proto
             * @interface IAgeRatingCategoryResult
             * @property {Array.<proto.IAgeRatingCategory>|null} [ageratingcategories] AgeRatingCategoryResult ageratingcategories
             */
    
            /**
             * Constructs a new AgeRatingCategoryResult.
             * @memberof proto
             * @classdesc Represents an AgeRatingCategoryResult.
             * @implements IAgeRatingCategoryResult
             * @constructor
             * @param {proto.IAgeRatingCategoryResult=} [properties] Properties to set
             */
            function AgeRatingCategoryResult(properties) {
                this.ageratingcategories = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AgeRatingCategoryResult ageratingcategories.
             * @member {Array.<proto.IAgeRatingCategory>} ageratingcategories
             * @memberof proto.AgeRatingCategoryResult
             * @instance
             */
            AgeRatingCategoryResult.prototype.ageratingcategories = $util.emptyArray;
    
            /**
             * Gets the default type url for AgeRatingCategoryResult
             * @function getTypeUrl
             * @memberof proto.AgeRatingCategoryResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AgeRatingCategoryResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.AgeRatingCategoryResult";
            };
    
            return AgeRatingCategoryResult;
        })();
    
        proto.AgeRatingCategory = (function() {
    
            /**
             * Properties of an AgeRatingCategory.
             * @memberof proto
             * @interface IAgeRatingCategory
             * @property {number|null} [id] AgeRatingCategory id
             * @property {string|null} [rating] AgeRatingCategory rating
             * @property {proto.IAgeRatingOrganization|null} [organization] AgeRatingCategory organization
             * @property {number|null} [created_at] AgeRatingCategory created_at
             * @property {number|null} [updated_at] AgeRatingCategory updated_at
             * @property {string|null} [checksum] AgeRatingCategory checksum
             */
    
            /**
             * Constructs a new AgeRatingCategory.
             * @memberof proto
             * @classdesc Represents an AgeRatingCategory.
             * @implements IAgeRatingCategory
             * @constructor
             * @param {proto.IAgeRatingCategory=} [properties] Properties to set
             */
            function AgeRatingCategory(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AgeRatingCategory id.
             * @member {number} id
             * @memberof proto.AgeRatingCategory
             * @instance
             */
            AgeRatingCategory.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * AgeRatingCategory rating.
             * @member {string} rating
             * @memberof proto.AgeRatingCategory
             * @instance
             */
            AgeRatingCategory.prototype.rating = "";
    
            /**
             * AgeRatingCategory organization.
             * @member {proto.IAgeRatingOrganization|null|undefined} organization
             * @memberof proto.AgeRatingCategory
             * @instance
             */
            AgeRatingCategory.prototype.organization = null;
    
            /**
             * AgeRatingCategory created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.AgeRatingCategory
             * @instance
             */
            AgeRatingCategory.prototype.created_at = null;
    
            /**
             * AgeRatingCategory updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.AgeRatingCategory
             * @instance
             */
            AgeRatingCategory.prototype.updated_at = null;
    
            /**
             * AgeRatingCategory checksum.
             * @member {string} checksum
             * @memberof proto.AgeRatingCategory
             * @instance
             */
            AgeRatingCategory.prototype.checksum = "";
    
            /**
             * Gets the default type url for AgeRatingCategory
             * @function getTypeUrl
             * @memberof proto.AgeRatingCategory
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AgeRatingCategory.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.AgeRatingCategory";
            };
    
            return AgeRatingCategory;
        })();
    
        proto.AgeRatingContentDescriptionResult = (function() {
    
            /**
             * Properties of an AgeRatingContentDescriptionResult.
             * @memberof proto
             * @interface IAgeRatingContentDescriptionResult
             * @property {Array.<proto.IAgeRatingContentDescription>|null} [ageratingcontentdescriptions] AgeRatingContentDescriptionResult ageratingcontentdescriptions
             */
    
            /**
             * Constructs a new AgeRatingContentDescriptionResult.
             * @memberof proto
             * @classdesc Represents an AgeRatingContentDescriptionResult.
             * @implements IAgeRatingContentDescriptionResult
             * @constructor
             * @param {proto.IAgeRatingContentDescriptionResult=} [properties] Properties to set
             */
            function AgeRatingContentDescriptionResult(properties) {
                this.ageratingcontentdescriptions = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AgeRatingContentDescriptionResult ageratingcontentdescriptions.
             * @member {Array.<proto.IAgeRatingContentDescription>} ageratingcontentdescriptions
             * @memberof proto.AgeRatingContentDescriptionResult
             * @instance
             */
            AgeRatingContentDescriptionResult.prototype.ageratingcontentdescriptions = $util.emptyArray;
    
            /**
             * Gets the default type url for AgeRatingContentDescriptionResult
             * @function getTypeUrl
             * @memberof proto.AgeRatingContentDescriptionResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AgeRatingContentDescriptionResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.AgeRatingContentDescriptionResult";
            };
    
            return AgeRatingContentDescriptionResult;
        })();
    
        proto.AgeRatingContentDescription = (function() {
    
            /**
             * Properties of an AgeRatingContentDescription.
             * @memberof proto
             * @interface IAgeRatingContentDescription
             * @property {number|null} [id] AgeRatingContentDescription id
             * @property {proto.AgeRatingContentDescriptionCategoryEnum|null} [category] AgeRatingContentDescription category
             * @property {string|null} [description] AgeRatingContentDescription description
             * @property {string|null} [checksum] AgeRatingContentDescription checksum
             */
    
            /**
             * Constructs a new AgeRatingContentDescription.
             * @memberof proto
             * @classdesc Represents an AgeRatingContentDescription.
             * @implements IAgeRatingContentDescription
             * @constructor
             * @param {proto.IAgeRatingContentDescription=} [properties] Properties to set
             */
            function AgeRatingContentDescription(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AgeRatingContentDescription id.
             * @member {number} id
             * @memberof proto.AgeRatingContentDescription
             * @instance
             */
            AgeRatingContentDescription.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * AgeRatingContentDescription category.
             * @member {proto.AgeRatingContentDescriptionCategoryEnum} category
             * @memberof proto.AgeRatingContentDescription
             * @instance
             */
            AgeRatingContentDescription.prototype.category = 0;
    
            /**
             * AgeRatingContentDescription description.
             * @member {string} description
             * @memberof proto.AgeRatingContentDescription
             * @instance
             */
            AgeRatingContentDescription.prototype.description = "";
    
            /**
             * AgeRatingContentDescription checksum.
             * @member {string} checksum
             * @memberof proto.AgeRatingContentDescription
             * @instance
             */
            AgeRatingContentDescription.prototype.checksum = "";
    
            /**
             * Gets the default type url for AgeRatingContentDescription
             * @function getTypeUrl
             * @memberof proto.AgeRatingContentDescription
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AgeRatingContentDescription.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.AgeRatingContentDescription";
            };
    
            return AgeRatingContentDescription;
        })();
    
        /**
         * AgeRatingContentDescriptionCategoryEnum enum.
         * @name proto.AgeRatingContentDescriptionCategoryEnum
         * @enum {number}
         * @property {number} AGERATINGCONTENTDESCRIPTION_CATEGORY_NULL=0 AGERATINGCONTENTDESCRIPTION_CATEGORY_NULL value
         * @property {number} ESRB_ALCOHOL_REFERENCE=1 ESRB_ALCOHOL_REFERENCE value
         * @property {number} ESRB_ANIMATED_BLOOD=2 ESRB_ANIMATED_BLOOD value
         * @property {number} ESRB_BLOOD=3 ESRB_BLOOD value
         * @property {number} ESRB_BLOOD_AND_GORE=4 ESRB_BLOOD_AND_GORE value
         * @property {number} ESRB_CARTOON_VIOLENCE=5 ESRB_CARTOON_VIOLENCE value
         * @property {number} ESRB_COMIC_MISCHIEF=6 ESRB_COMIC_MISCHIEF value
         * @property {number} ESRB_CRUDE_HUMOR=7 ESRB_CRUDE_HUMOR value
         * @property {number} ESRB_DRUG_REFERENCE=8 ESRB_DRUG_REFERENCE value
         * @property {number} ESRB_FANTASY_VIOLENCE=9 ESRB_FANTASY_VIOLENCE value
         * @property {number} ESRB_INTENSE_VIOLENCE=10 ESRB_INTENSE_VIOLENCE value
         * @property {number} ESRB_LANGUAGE=11 ESRB_LANGUAGE value
         * @property {number} ESRB_LYRICS=12 ESRB_LYRICS value
         * @property {number} ESRB_MATURE_HUMOR=13 ESRB_MATURE_HUMOR value
         * @property {number} ESRB_NUDITY=14 ESRB_NUDITY value
         * @property {number} ESRB_PARTIAL_NUDITY=15 ESRB_PARTIAL_NUDITY value
         * @property {number} ESRB_REAL_GAMBLING=16 ESRB_REAL_GAMBLING value
         * @property {number} ESRB_SEXUAL_CONTENT=17 ESRB_SEXUAL_CONTENT value
         * @property {number} ESRB_SEXUAL_THEMES=18 ESRB_SEXUAL_THEMES value
         * @property {number} ESRB_SEXUAL_VIOLENCE=19 ESRB_SEXUAL_VIOLENCE value
         * @property {number} ESRB_SIMULATED_GAMBLING=20 ESRB_SIMULATED_GAMBLING value
         * @property {number} ESRB_STRONG_LANGUAGE=21 ESRB_STRONG_LANGUAGE value
         * @property {number} ESRB_STRONG_LYRICS=22 ESRB_STRONG_LYRICS value
         * @property {number} ESRB_STRONG_SEXUAL_CONTENT=23 ESRB_STRONG_SEXUAL_CONTENT value
         * @property {number} ESRB_SUGGESTIVE_THEMES=24 ESRB_SUGGESTIVE_THEMES value
         * @property {number} ESRB_TOBACCO_REFERENCE=25 ESRB_TOBACCO_REFERENCE value
         * @property {number} ESRB_USE_OF_ALCOHOL=26 ESRB_USE_OF_ALCOHOL value
         * @property {number} ESRB_USE_OF_DRUGS=27 ESRB_USE_OF_DRUGS value
         * @property {number} ESRB_USE_OF_TOBACCO=28 ESRB_USE_OF_TOBACCO value
         * @property {number} ESRB_VIOLENCE=29 ESRB_VIOLENCE value
         * @property {number} ESRB_VIOLENT_REFERENCES=30 ESRB_VIOLENT_REFERENCES value
         * @property {number} ESRB_ANIMATED_VIOLENCE=31 ESRB_ANIMATED_VIOLENCE value
         * @property {number} ESRB_MILD_LANGUAGE=32 ESRB_MILD_LANGUAGE value
         * @property {number} ESRB_MILD_VIOLENCE=33 ESRB_MILD_VIOLENCE value
         * @property {number} ESRB_USE_OF_DRUGS_AND_ALCOHOL=34 ESRB_USE_OF_DRUGS_AND_ALCOHOL value
         * @property {number} ESRB_DRUG_AND_ALCOHOL_REFERENCE=35 ESRB_DRUG_AND_ALCOHOL_REFERENCE value
         * @property {number} ESRB_MILD_SUGGESTIVE_THEMES=36 ESRB_MILD_SUGGESTIVE_THEMES value
         * @property {number} ESRB_MILD_CARTOON_VIOLENCE=37 ESRB_MILD_CARTOON_VIOLENCE value
         * @property {number} ESRB_MILD_BLOOD=38 ESRB_MILD_BLOOD value
         * @property {number} ESRB_REALISTIC_BLOOD_AND_GORE=39 ESRB_REALISTIC_BLOOD_AND_GORE value
         * @property {number} ESRB_REALISTIC_VIOLENCE=40 ESRB_REALISTIC_VIOLENCE value
         * @property {number} ESRB_ALCOHOL_AND_TOBACCO_REFERENCE=41 ESRB_ALCOHOL_AND_TOBACCO_REFERENCE value
         * @property {number} ESRB_MATURE_SEXUAL_THEMES=42 ESRB_MATURE_SEXUAL_THEMES value
         * @property {number} ESRB_MILD_ANIMATED_VIOLENCE=43 ESRB_MILD_ANIMATED_VIOLENCE value
         * @property {number} ESRB_MILD_SEXUAL_THEMES=44 ESRB_MILD_SEXUAL_THEMES value
         * @property {number} ESRB_USE_OF_ALCOHOL_AND_TOBACCO=45 ESRB_USE_OF_ALCOHOL_AND_TOBACCO value
         * @property {number} ESRB_ANIMATED_BLOOD_AND_GORE=46 ESRB_ANIMATED_BLOOD_AND_GORE value
         * @property {number} ESRB_MILD_FANTASY_VIOLENCE=47 ESRB_MILD_FANTASY_VIOLENCE value
         * @property {number} ESRB_MILD_LYRICS=48 ESRB_MILD_LYRICS value
         * @property {number} ESRB_REALISTIC_BLOOD=49 ESRB_REALISTIC_BLOOD value
         * @property {number} PEGI_VIOLENCE=50 PEGI_VIOLENCE value
         * @property {number} PEGI_SEX=51 PEGI_SEX value
         * @property {number} PEGI_DRUGS=52 PEGI_DRUGS value
         * @property {number} PEGI_FEAR=53 PEGI_FEAR value
         * @property {number} PEGI_DISCRIMINATION=54 PEGI_DISCRIMINATION value
         * @property {number} PEGI_BAD_LANGUAGE=55 PEGI_BAD_LANGUAGE value
         * @property {number} PEGI_GAMBLING=56 PEGI_GAMBLING value
         * @property {number} PEGI_ONLINE_GAMEPLAY=57 PEGI_ONLINE_GAMEPLAY value
         * @property {number} PEGI_IN_GAME_PURCHASES=58 PEGI_IN_GAME_PURCHASES value
         * @property {number} CERO_LOVE=59 CERO_LOVE value
         * @property {number} CERO_SEXUAL_CONTENT=60 CERO_SEXUAL_CONTENT value
         * @property {number} CERO_VIOLENCE=61 CERO_VIOLENCE value
         * @property {number} CERO_HORROR=62 CERO_HORROR value
         * @property {number} CERO_DRINKING_SMOKING=63 CERO_DRINKING_SMOKING value
         * @property {number} CERO_GAMBLING=64 CERO_GAMBLING value
         * @property {number} CERO_CRIME=65 CERO_CRIME value
         * @property {number} CERO_CONTROLLED_SUBSTANCES=66 CERO_CONTROLLED_SUBSTANCES value
         * @property {number} CERO_LANGUAGES_AND_OTHERS=67 CERO_LANGUAGES_AND_OTHERS value
         * @property {number} GRAC_SEXUALITY=68 GRAC_SEXUALITY value
         * @property {number} GRAC_VIOLENCE=69 GRAC_VIOLENCE value
         * @property {number} GRAC_FEAR_HORROR_THREATENING=70 GRAC_FEAR_HORROR_THREATENING value
         * @property {number} GRAC_LANGUAGE=71 GRAC_LANGUAGE value
         * @property {number} GRAC_ALCOHOL_TOBACCO_DRUG=72 GRAC_ALCOHOL_TOBACCO_DRUG value
         * @property {number} GRAC_CRIME_ANTI_SOCIAL=73 GRAC_CRIME_ANTI_SOCIAL value
         * @property {number} GRAC_GAMBLING=74 GRAC_GAMBLING value
         * @property {number} CLASS_IND_VIOLENCIA=75 CLASS_IND_VIOLENCIA value
         * @property {number} CLASS_IND_VIOLENCIA_EXTREMA=76 CLASS_IND_VIOLENCIA_EXTREMA value
         * @property {number} CLASS_IND_CONTEUDO_SEXUAL=77 CLASS_IND_CONTEUDO_SEXUAL value
         * @property {number} CLASS_IND_NUDEZ=78 CLASS_IND_NUDEZ value
         * @property {number} CLASS_IND_SEXO=79 CLASS_IND_SEXO value
         * @property {number} CLASS_IND_SEXO_EXPLICITO=80 CLASS_IND_SEXO_EXPLICITO value
         * @property {number} CLASS_IND_DROGAS=81 CLASS_IND_DROGAS value
         * @property {number} CLASS_IND_DROGAS_LICITAS=82 CLASS_IND_DROGAS_LICITAS value
         * @property {number} CLASS_IND_DROGAS_ILICITAS=83 CLASS_IND_DROGAS_ILICITAS value
         * @property {number} CLASS_IND_LINGUAGEM_IMPROPRIA=84 CLASS_IND_LINGUAGEM_IMPROPRIA value
         * @property {number} CLASS_IND_ATOS_CRIMINOSOS=85 CLASS_IND_ATOS_CRIMINOSOS value
         */
        proto.AgeRatingContentDescriptionCategoryEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AGERATINGCONTENTDESCRIPTION_CATEGORY_NULL"] = 0;
            values[valuesById[1] = "ESRB_ALCOHOL_REFERENCE"] = 1;
            values[valuesById[2] = "ESRB_ANIMATED_BLOOD"] = 2;
            values[valuesById[3] = "ESRB_BLOOD"] = 3;
            values[valuesById[4] = "ESRB_BLOOD_AND_GORE"] = 4;
            values[valuesById[5] = "ESRB_CARTOON_VIOLENCE"] = 5;
            values[valuesById[6] = "ESRB_COMIC_MISCHIEF"] = 6;
            values[valuesById[7] = "ESRB_CRUDE_HUMOR"] = 7;
            values[valuesById[8] = "ESRB_DRUG_REFERENCE"] = 8;
            values[valuesById[9] = "ESRB_FANTASY_VIOLENCE"] = 9;
            values[valuesById[10] = "ESRB_INTENSE_VIOLENCE"] = 10;
            values[valuesById[11] = "ESRB_LANGUAGE"] = 11;
            values[valuesById[12] = "ESRB_LYRICS"] = 12;
            values[valuesById[13] = "ESRB_MATURE_HUMOR"] = 13;
            values[valuesById[14] = "ESRB_NUDITY"] = 14;
            values[valuesById[15] = "ESRB_PARTIAL_NUDITY"] = 15;
            values[valuesById[16] = "ESRB_REAL_GAMBLING"] = 16;
            values[valuesById[17] = "ESRB_SEXUAL_CONTENT"] = 17;
            values[valuesById[18] = "ESRB_SEXUAL_THEMES"] = 18;
            values[valuesById[19] = "ESRB_SEXUAL_VIOLENCE"] = 19;
            values[valuesById[20] = "ESRB_SIMULATED_GAMBLING"] = 20;
            values[valuesById[21] = "ESRB_STRONG_LANGUAGE"] = 21;
            values[valuesById[22] = "ESRB_STRONG_LYRICS"] = 22;
            values[valuesById[23] = "ESRB_STRONG_SEXUAL_CONTENT"] = 23;
            values[valuesById[24] = "ESRB_SUGGESTIVE_THEMES"] = 24;
            values[valuesById[25] = "ESRB_TOBACCO_REFERENCE"] = 25;
            values[valuesById[26] = "ESRB_USE_OF_ALCOHOL"] = 26;
            values[valuesById[27] = "ESRB_USE_OF_DRUGS"] = 27;
            values[valuesById[28] = "ESRB_USE_OF_TOBACCO"] = 28;
            values[valuesById[29] = "ESRB_VIOLENCE"] = 29;
            values[valuesById[30] = "ESRB_VIOLENT_REFERENCES"] = 30;
            values[valuesById[31] = "ESRB_ANIMATED_VIOLENCE"] = 31;
            values[valuesById[32] = "ESRB_MILD_LANGUAGE"] = 32;
            values[valuesById[33] = "ESRB_MILD_VIOLENCE"] = 33;
            values[valuesById[34] = "ESRB_USE_OF_DRUGS_AND_ALCOHOL"] = 34;
            values[valuesById[35] = "ESRB_DRUG_AND_ALCOHOL_REFERENCE"] = 35;
            values[valuesById[36] = "ESRB_MILD_SUGGESTIVE_THEMES"] = 36;
            values[valuesById[37] = "ESRB_MILD_CARTOON_VIOLENCE"] = 37;
            values[valuesById[38] = "ESRB_MILD_BLOOD"] = 38;
            values[valuesById[39] = "ESRB_REALISTIC_BLOOD_AND_GORE"] = 39;
            values[valuesById[40] = "ESRB_REALISTIC_VIOLENCE"] = 40;
            values[valuesById[41] = "ESRB_ALCOHOL_AND_TOBACCO_REFERENCE"] = 41;
            values[valuesById[42] = "ESRB_MATURE_SEXUAL_THEMES"] = 42;
            values[valuesById[43] = "ESRB_MILD_ANIMATED_VIOLENCE"] = 43;
            values[valuesById[44] = "ESRB_MILD_SEXUAL_THEMES"] = 44;
            values[valuesById[45] = "ESRB_USE_OF_ALCOHOL_AND_TOBACCO"] = 45;
            values[valuesById[46] = "ESRB_ANIMATED_BLOOD_AND_GORE"] = 46;
            values[valuesById[47] = "ESRB_MILD_FANTASY_VIOLENCE"] = 47;
            values[valuesById[48] = "ESRB_MILD_LYRICS"] = 48;
            values[valuesById[49] = "ESRB_REALISTIC_BLOOD"] = 49;
            values[valuesById[50] = "PEGI_VIOLENCE"] = 50;
            values[valuesById[51] = "PEGI_SEX"] = 51;
            values[valuesById[52] = "PEGI_DRUGS"] = 52;
            values[valuesById[53] = "PEGI_FEAR"] = 53;
            values[valuesById[54] = "PEGI_DISCRIMINATION"] = 54;
            values[valuesById[55] = "PEGI_BAD_LANGUAGE"] = 55;
            values[valuesById[56] = "PEGI_GAMBLING"] = 56;
            values[valuesById[57] = "PEGI_ONLINE_GAMEPLAY"] = 57;
            values[valuesById[58] = "PEGI_IN_GAME_PURCHASES"] = 58;
            values[valuesById[59] = "CERO_LOVE"] = 59;
            values[valuesById[60] = "CERO_SEXUAL_CONTENT"] = 60;
            values[valuesById[61] = "CERO_VIOLENCE"] = 61;
            values[valuesById[62] = "CERO_HORROR"] = 62;
            values[valuesById[63] = "CERO_DRINKING_SMOKING"] = 63;
            values[valuesById[64] = "CERO_GAMBLING"] = 64;
            values[valuesById[65] = "CERO_CRIME"] = 65;
            values[valuesById[66] = "CERO_CONTROLLED_SUBSTANCES"] = 66;
            values[valuesById[67] = "CERO_LANGUAGES_AND_OTHERS"] = 67;
            values[valuesById[68] = "GRAC_SEXUALITY"] = 68;
            values[valuesById[69] = "GRAC_VIOLENCE"] = 69;
            values[valuesById[70] = "GRAC_FEAR_HORROR_THREATENING"] = 70;
            values[valuesById[71] = "GRAC_LANGUAGE"] = 71;
            values[valuesById[72] = "GRAC_ALCOHOL_TOBACCO_DRUG"] = 72;
            values[valuesById[73] = "GRAC_CRIME_ANTI_SOCIAL"] = 73;
            values[valuesById[74] = "GRAC_GAMBLING"] = 74;
            values[valuesById[75] = "CLASS_IND_VIOLENCIA"] = 75;
            values[valuesById[76] = "CLASS_IND_VIOLENCIA_EXTREMA"] = 76;
            values[valuesById[77] = "CLASS_IND_CONTEUDO_SEXUAL"] = 77;
            values[valuesById[78] = "CLASS_IND_NUDEZ"] = 78;
            values[valuesById[79] = "CLASS_IND_SEXO"] = 79;
            values[valuesById[80] = "CLASS_IND_SEXO_EXPLICITO"] = 80;
            values[valuesById[81] = "CLASS_IND_DROGAS"] = 81;
            values[valuesById[82] = "CLASS_IND_DROGAS_LICITAS"] = 82;
            values[valuesById[83] = "CLASS_IND_DROGAS_ILICITAS"] = 83;
            values[valuesById[84] = "CLASS_IND_LINGUAGEM_IMPROPRIA"] = 84;
            values[valuesById[85] = "CLASS_IND_ATOS_CRIMINOSOS"] = 85;
            return values;
        })();
    
        proto.AgeRatingContentDescriptionV2Result = (function() {
    
            /**
             * Properties of an AgeRatingContentDescriptionV2Result.
             * @memberof proto
             * @interface IAgeRatingContentDescriptionV2Result
             * @property {Array.<proto.IAgeRatingContentDescriptionV2>|null} [ageratingcontentdescriptionsv2] AgeRatingContentDescriptionV2Result ageratingcontentdescriptionsv2
             */
    
            /**
             * Constructs a new AgeRatingContentDescriptionV2Result.
             * @memberof proto
             * @classdesc Represents an AgeRatingContentDescriptionV2Result.
             * @implements IAgeRatingContentDescriptionV2Result
             * @constructor
             * @param {proto.IAgeRatingContentDescriptionV2Result=} [properties] Properties to set
             */
            function AgeRatingContentDescriptionV2Result(properties) {
                this.ageratingcontentdescriptionsv2 = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AgeRatingContentDescriptionV2Result ageratingcontentdescriptionsv2.
             * @member {Array.<proto.IAgeRatingContentDescriptionV2>} ageratingcontentdescriptionsv2
             * @memberof proto.AgeRatingContentDescriptionV2Result
             * @instance
             */
            AgeRatingContentDescriptionV2Result.prototype.ageratingcontentdescriptionsv2 = $util.emptyArray;
    
            /**
             * Gets the default type url for AgeRatingContentDescriptionV2Result
             * @function getTypeUrl
             * @memberof proto.AgeRatingContentDescriptionV2Result
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AgeRatingContentDescriptionV2Result.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.AgeRatingContentDescriptionV2Result";
            };
    
            return AgeRatingContentDescriptionV2Result;
        })();
    
        proto.AgeRatingContentDescriptionV2 = (function() {
    
            /**
             * Properties of an AgeRatingContentDescriptionV2.
             * @memberof proto
             * @interface IAgeRatingContentDescriptionV2
             * @property {number|null} [id] AgeRatingContentDescriptionV2 id
             * @property {string|null} [description] AgeRatingContentDescriptionV2 description
             * @property {proto.IAgeRatingOrganization|null} [organization] AgeRatingContentDescriptionV2 organization
             * @property {number|null} [created_at] AgeRatingContentDescriptionV2 created_at
             * @property {number|null} [updated_at] AgeRatingContentDescriptionV2 updated_at
             * @property {string|null} [checksum] AgeRatingContentDescriptionV2 checksum
             */
    
            /**
             * Constructs a new AgeRatingContentDescriptionV2.
             * @memberof proto
             * @classdesc Represents an AgeRatingContentDescriptionV2.
             * @implements IAgeRatingContentDescriptionV2
             * @constructor
             * @param {proto.IAgeRatingContentDescriptionV2=} [properties] Properties to set
             */
            function AgeRatingContentDescriptionV2(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AgeRatingContentDescriptionV2 id.
             * @member {number} id
             * @memberof proto.AgeRatingContentDescriptionV2
             * @instance
             */
            AgeRatingContentDescriptionV2.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * AgeRatingContentDescriptionV2 description.
             * @member {string} description
             * @memberof proto.AgeRatingContentDescriptionV2
             * @instance
             */
            AgeRatingContentDescriptionV2.prototype.description = "";
    
            /**
             * AgeRatingContentDescriptionV2 organization.
             * @member {proto.IAgeRatingOrganization|null|undefined} organization
             * @memberof proto.AgeRatingContentDescriptionV2
             * @instance
             */
            AgeRatingContentDescriptionV2.prototype.organization = null;
    
            /**
             * AgeRatingContentDescriptionV2 created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.AgeRatingContentDescriptionV2
             * @instance
             */
            AgeRatingContentDescriptionV2.prototype.created_at = null;
    
            /**
             * AgeRatingContentDescriptionV2 updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.AgeRatingContentDescriptionV2
             * @instance
             */
            AgeRatingContentDescriptionV2.prototype.updated_at = null;
    
            /**
             * AgeRatingContentDescriptionV2 checksum.
             * @member {string} checksum
             * @memberof proto.AgeRatingContentDescriptionV2
             * @instance
             */
            AgeRatingContentDescriptionV2.prototype.checksum = "";
    
            /**
             * Gets the default type url for AgeRatingContentDescriptionV2
             * @function getTypeUrl
             * @memberof proto.AgeRatingContentDescriptionV2
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AgeRatingContentDescriptionV2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.AgeRatingContentDescriptionV2";
            };
    
            return AgeRatingContentDescriptionV2;
        })();
    
        proto.AgeRatingOrganizationResult = (function() {
    
            /**
             * Properties of an AgeRatingOrganizationResult.
             * @memberof proto
             * @interface IAgeRatingOrganizationResult
             * @property {Array.<proto.IAgeRatingOrganization>|null} [ageratingorganizations] AgeRatingOrganizationResult ageratingorganizations
             */
    
            /**
             * Constructs a new AgeRatingOrganizationResult.
             * @memberof proto
             * @classdesc Represents an AgeRatingOrganizationResult.
             * @implements IAgeRatingOrganizationResult
             * @constructor
             * @param {proto.IAgeRatingOrganizationResult=} [properties] Properties to set
             */
            function AgeRatingOrganizationResult(properties) {
                this.ageratingorganizations = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AgeRatingOrganizationResult ageratingorganizations.
             * @member {Array.<proto.IAgeRatingOrganization>} ageratingorganizations
             * @memberof proto.AgeRatingOrganizationResult
             * @instance
             */
            AgeRatingOrganizationResult.prototype.ageratingorganizations = $util.emptyArray;
    
            /**
             * Gets the default type url for AgeRatingOrganizationResult
             * @function getTypeUrl
             * @memberof proto.AgeRatingOrganizationResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AgeRatingOrganizationResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.AgeRatingOrganizationResult";
            };
    
            return AgeRatingOrganizationResult;
        })();
    
        proto.AgeRatingOrganization = (function() {
    
            /**
             * Properties of an AgeRatingOrganization.
             * @memberof proto
             * @interface IAgeRatingOrganization
             * @property {number|null} [id] AgeRatingOrganization id
             * @property {string|null} [name] AgeRatingOrganization name
             * @property {number|null} [created_at] AgeRatingOrganization created_at
             * @property {number|null} [updated_at] AgeRatingOrganization updated_at
             * @property {string|null} [checksum] AgeRatingOrganization checksum
             */
    
            /**
             * Constructs a new AgeRatingOrganization.
             * @memberof proto
             * @classdesc Represents an AgeRatingOrganization.
             * @implements IAgeRatingOrganization
             * @constructor
             * @param {proto.IAgeRatingOrganization=} [properties] Properties to set
             */
            function AgeRatingOrganization(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AgeRatingOrganization id.
             * @member {number} id
             * @memberof proto.AgeRatingOrganization
             * @instance
             */
            AgeRatingOrganization.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * AgeRatingOrganization name.
             * @member {string} name
             * @memberof proto.AgeRatingOrganization
             * @instance
             */
            AgeRatingOrganization.prototype.name = "";
    
            /**
             * AgeRatingOrganization created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.AgeRatingOrganization
             * @instance
             */
            AgeRatingOrganization.prototype.created_at = null;
    
            /**
             * AgeRatingOrganization updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.AgeRatingOrganization
             * @instance
             */
            AgeRatingOrganization.prototype.updated_at = null;
    
            /**
             * AgeRatingOrganization checksum.
             * @member {string} checksum
             * @memberof proto.AgeRatingOrganization
             * @instance
             */
            AgeRatingOrganization.prototype.checksum = "";
    
            /**
             * Gets the default type url for AgeRatingOrganization
             * @function getTypeUrl
             * @memberof proto.AgeRatingOrganization
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AgeRatingOrganization.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.AgeRatingOrganization";
            };
    
            return AgeRatingOrganization;
        })();
    
        proto.AlternativeNameResult = (function() {
    
            /**
             * Properties of an AlternativeNameResult.
             * @memberof proto
             * @interface IAlternativeNameResult
             * @property {Array.<proto.IAlternativeName>|null} [alternativenames] AlternativeNameResult alternativenames
             */
    
            /**
             * Constructs a new AlternativeNameResult.
             * @memberof proto
             * @classdesc Represents an AlternativeNameResult.
             * @implements IAlternativeNameResult
             * @constructor
             * @param {proto.IAlternativeNameResult=} [properties] Properties to set
             */
            function AlternativeNameResult(properties) {
                this.alternativenames = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AlternativeNameResult alternativenames.
             * @member {Array.<proto.IAlternativeName>} alternativenames
             * @memberof proto.AlternativeNameResult
             * @instance
             */
            AlternativeNameResult.prototype.alternativenames = $util.emptyArray;
    
            /**
             * Gets the default type url for AlternativeNameResult
             * @function getTypeUrl
             * @memberof proto.AlternativeNameResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AlternativeNameResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.AlternativeNameResult";
            };
    
            return AlternativeNameResult;
        })();
    
        proto.AlternativeName = (function() {
    
            /**
             * Properties of an AlternativeName.
             * @memberof proto
             * @interface IAlternativeName
             * @property {number|null} [id] AlternativeName id
             * @property {string|null} [comment] AlternativeName comment
             * @property {proto.IGame|null} [game] AlternativeName game
             * @property {string|null} [name] AlternativeName name
             * @property {string|null} [checksum] AlternativeName checksum
             */
    
            /**
             * Constructs a new AlternativeName.
             * @memberof proto
             * @classdesc Represents an AlternativeName.
             * @implements IAlternativeName
             * @constructor
             * @param {proto.IAlternativeName=} [properties] Properties to set
             */
            function AlternativeName(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * AlternativeName id.
             * @member {number} id
             * @memberof proto.AlternativeName
             * @instance
             */
            AlternativeName.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * AlternativeName comment.
             * @member {string} comment
             * @memberof proto.AlternativeName
             * @instance
             */
            AlternativeName.prototype.comment = "";
    
            /**
             * AlternativeName game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.AlternativeName
             * @instance
             */
            AlternativeName.prototype.game = null;
    
            /**
             * AlternativeName name.
             * @member {string} name
             * @memberof proto.AlternativeName
             * @instance
             */
            AlternativeName.prototype.name = "";
    
            /**
             * AlternativeName checksum.
             * @member {string} checksum
             * @memberof proto.AlternativeName
             * @instance
             */
            AlternativeName.prototype.checksum = "";
    
            /**
             * Gets the default type url for AlternativeName
             * @function getTypeUrl
             * @memberof proto.AlternativeName
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AlternativeName.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.AlternativeName";
            };
    
            return AlternativeName;
        })();
    
        proto.ArtworkResult = (function() {
    
            /**
             * Properties of an ArtworkResult.
             * @memberof proto
             * @interface IArtworkResult
             * @property {Array.<proto.IArtwork>|null} [artworks] ArtworkResult artworks
             */
    
            /**
             * Constructs a new ArtworkResult.
             * @memberof proto
             * @classdesc Represents an ArtworkResult.
             * @implements IArtworkResult
             * @constructor
             * @param {proto.IArtworkResult=} [properties] Properties to set
             */
            function ArtworkResult(properties) {
                this.artworks = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ArtworkResult artworks.
             * @member {Array.<proto.IArtwork>} artworks
             * @memberof proto.ArtworkResult
             * @instance
             */
            ArtworkResult.prototype.artworks = $util.emptyArray;
    
            /**
             * Gets the default type url for ArtworkResult
             * @function getTypeUrl
             * @memberof proto.ArtworkResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ArtworkResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ArtworkResult";
            };
    
            return ArtworkResult;
        })();
    
        proto.Artwork = (function() {
    
            /**
             * Properties of an Artwork.
             * @memberof proto
             * @interface IArtwork
             * @property {number|null} [id] Artwork id
             * @property {boolean|null} [alpha_channel] Artwork alpha_channel
             * @property {boolean|null} [animated] Artwork animated
             * @property {proto.IGame|null} [game] Artwork game
             * @property {number|null} [height] Artwork height
             * @property {string|null} [image_id] Artwork image_id
             * @property {string|null} [url] Artwork url
             * @property {number|null} [width] Artwork width
             * @property {string|null} [checksum] Artwork checksum
             */
    
            /**
             * Constructs a new Artwork.
             * @memberof proto
             * @classdesc Represents an Artwork.
             * @implements IArtwork
             * @constructor
             * @param {proto.IArtwork=} [properties] Properties to set
             */
            function Artwork(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Artwork id.
             * @member {number} id
             * @memberof proto.Artwork
             * @instance
             */
            Artwork.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Artwork alpha_channel.
             * @member {boolean} alpha_channel
             * @memberof proto.Artwork
             * @instance
             */
            Artwork.prototype.alpha_channel = false;
    
            /**
             * Artwork animated.
             * @member {boolean} animated
             * @memberof proto.Artwork
             * @instance
             */
            Artwork.prototype.animated = false;
    
            /**
             * Artwork game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.Artwork
             * @instance
             */
            Artwork.prototype.game = null;
    
            /**
             * Artwork height.
             * @member {number} height
             * @memberof proto.Artwork
             * @instance
             */
            Artwork.prototype.height = 0;
    
            /**
             * Artwork image_id.
             * @member {string} image_id
             * @memberof proto.Artwork
             * @instance
             */
            Artwork.prototype.image_id = "";
    
            /**
             * Artwork url.
             * @member {string} url
             * @memberof proto.Artwork
             * @instance
             */
            Artwork.prototype.url = "";
    
            /**
             * Artwork width.
             * @member {number} width
             * @memberof proto.Artwork
             * @instance
             */
            Artwork.prototype.width = 0;
    
            /**
             * Artwork checksum.
             * @member {string} checksum
             * @memberof proto.Artwork
             * @instance
             */
            Artwork.prototype.checksum = "";
    
            /**
             * Gets the default type url for Artwork
             * @function getTypeUrl
             * @memberof proto.Artwork
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Artwork.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Artwork";
            };
    
            return Artwork;
        })();
    
        proto.CharacterResult = (function() {
    
            /**
             * Properties of a CharacterResult.
             * @memberof proto
             * @interface ICharacterResult
             * @property {Array.<proto.ICharacter>|null} [characters] CharacterResult characters
             */
    
            /**
             * Constructs a new CharacterResult.
             * @memberof proto
             * @classdesc Represents a CharacterResult.
             * @implements ICharacterResult
             * @constructor
             * @param {proto.ICharacterResult=} [properties] Properties to set
             */
            function CharacterResult(properties) {
                this.characters = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CharacterResult characters.
             * @member {Array.<proto.ICharacter>} characters
             * @memberof proto.CharacterResult
             * @instance
             */
            CharacterResult.prototype.characters = $util.emptyArray;
    
            /**
             * Gets the default type url for CharacterResult
             * @function getTypeUrl
             * @memberof proto.CharacterResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CharacterResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CharacterResult";
            };
    
            return CharacterResult;
        })();
    
        proto.Character = (function() {
    
            /**
             * Properties of a Character.
             * @memberof proto
             * @interface ICharacter
             * @property {number|null} [id] Character id
             * @property {Array.<string>|null} [akas] Character akas
             * @property {string|null} [country_name] Character country_name
             * @property {number|null} [created_at] Character created_at
             * @property {string|null} [description] Character description
             * @property {Array.<proto.IGame>|null} [games] Character games
             * @property {proto.GenderGenderEnum|null} [gender] Character gender
             * @property {proto.ICharacterMugShot|null} [mug_shot] Character mug_shot
             * @property {string|null} [name] Character name
             * @property {string|null} [slug] Character slug
             * @property {proto.CharacterSpeciesEnum|null} [species] Character species
             * @property {number|null} [updated_at] Character updated_at
             * @property {string|null} [url] Character url
             * @property {string|null} [checksum] Character checksum
             * @property {proto.ICharacterGender|null} [character_gender] Character character_gender
             * @property {proto.ICharacterSpecie|null} [character_species] Character character_species
             */
    
            /**
             * Constructs a new Character.
             * @memberof proto
             * @classdesc Represents a Character.
             * @implements ICharacter
             * @constructor
             * @param {proto.ICharacter=} [properties] Properties to set
             */
            function Character(properties) {
                this.akas = [];
                this.games = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Character id.
             * @member {number} id
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Character akas.
             * @member {Array.<string>} akas
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.akas = $util.emptyArray;
    
            /**
             * Character country_name.
             * @member {string} country_name
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.country_name = "";
    
            /**
             * Character created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.created_at = null;
    
            /**
             * Character description.
             * @member {string} description
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.description = "";
    
            /**
             * Character games.
             * @member {Array.<proto.IGame>} games
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.games = $util.emptyArray;
    
            /**
             * Character gender.
             * @member {proto.GenderGenderEnum} gender
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.gender = 0;
    
            /**
             * Character mug_shot.
             * @member {proto.ICharacterMugShot|null|undefined} mug_shot
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.mug_shot = null;
    
            /**
             * Character name.
             * @member {string} name
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.name = "";
    
            /**
             * Character slug.
             * @member {string} slug
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.slug = "";
    
            /**
             * Character species.
             * @member {proto.CharacterSpeciesEnum} species
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.species = 0;
    
            /**
             * Character updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.updated_at = null;
    
            /**
             * Character url.
             * @member {string} url
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.url = "";
    
            /**
             * Character checksum.
             * @member {string} checksum
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.checksum = "";
    
            /**
             * Character character_gender.
             * @member {proto.ICharacterGender|null|undefined} character_gender
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.character_gender = null;
    
            /**
             * Character character_species.
             * @member {proto.ICharacterSpecie|null|undefined} character_species
             * @memberof proto.Character
             * @instance
             */
            Character.prototype.character_species = null;
    
            /**
             * Gets the default type url for Character
             * @function getTypeUrl
             * @memberof proto.Character
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Character.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Character";
            };
    
            return Character;
        })();
    
        /**
         * GenderGenderEnum enum.
         * @name proto.GenderGenderEnum
         * @enum {number}
         * @property {number} MALE=0 MALE value
         * @property {number} FEMALE=1 FEMALE value
         * @property {number} OTHER=2 OTHER value
         */
        proto.GenderGenderEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "MALE"] = 0;
            values[valuesById[1] = "FEMALE"] = 1;
            values[valuesById[2] = "OTHER"] = 2;
            return values;
        })();
    
        /**
         * CharacterSpeciesEnum enum.
         * @name proto.CharacterSpeciesEnum
         * @enum {number}
         * @property {number} CHARACTER_SPECIES_NULL=0 CHARACTER_SPECIES_NULL value
         * @property {number} HUMAN=1 HUMAN value
         * @property {number} ALIEN=2 ALIEN value
         * @property {number} ANIMAL=3 ANIMAL value
         * @property {number} ANDROID=4 ANDROID value
         * @property {number} UNKNOWN=5 UNKNOWN value
         */
        proto.CharacterSpeciesEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CHARACTER_SPECIES_NULL"] = 0;
            values[valuesById[1] = "HUMAN"] = 1;
            values[valuesById[2] = "ALIEN"] = 2;
            values[valuesById[3] = "ANIMAL"] = 3;
            values[valuesById[4] = "ANDROID"] = 4;
            values[valuesById[5] = "UNKNOWN"] = 5;
            return values;
        })();
    
        proto.CharacterGenderResult = (function() {
    
            /**
             * Properties of a CharacterGenderResult.
             * @memberof proto
             * @interface ICharacterGenderResult
             * @property {Array.<proto.ICharacterGender>|null} [charactergenders] CharacterGenderResult charactergenders
             */
    
            /**
             * Constructs a new CharacterGenderResult.
             * @memberof proto
             * @classdesc Represents a CharacterGenderResult.
             * @implements ICharacterGenderResult
             * @constructor
             * @param {proto.ICharacterGenderResult=} [properties] Properties to set
             */
            function CharacterGenderResult(properties) {
                this.charactergenders = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CharacterGenderResult charactergenders.
             * @member {Array.<proto.ICharacterGender>} charactergenders
             * @memberof proto.CharacterGenderResult
             * @instance
             */
            CharacterGenderResult.prototype.charactergenders = $util.emptyArray;
    
            /**
             * Gets the default type url for CharacterGenderResult
             * @function getTypeUrl
             * @memberof proto.CharacterGenderResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CharacterGenderResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CharacterGenderResult";
            };
    
            return CharacterGenderResult;
        })();
    
        proto.CharacterGender = (function() {
    
            /**
             * Properties of a CharacterGender.
             * @memberof proto
             * @interface ICharacterGender
             * @property {number|null} [id] CharacterGender id
             * @property {string|null} [name] CharacterGender name
             * @property {number|null} [created_at] CharacterGender created_at
             * @property {number|null} [updated_at] CharacterGender updated_at
             * @property {string|null} [checksum] CharacterGender checksum
             */
    
            /**
             * Constructs a new CharacterGender.
             * @memberof proto
             * @classdesc Represents a CharacterGender.
             * @implements ICharacterGender
             * @constructor
             * @param {proto.ICharacterGender=} [properties] Properties to set
             */
            function CharacterGender(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CharacterGender id.
             * @member {number} id
             * @memberof proto.CharacterGender
             * @instance
             */
            CharacterGender.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * CharacterGender name.
             * @member {string} name
             * @memberof proto.CharacterGender
             * @instance
             */
            CharacterGender.prototype.name = "";
    
            /**
             * CharacterGender created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.CharacterGender
             * @instance
             */
            CharacterGender.prototype.created_at = null;
    
            /**
             * CharacterGender updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.CharacterGender
             * @instance
             */
            CharacterGender.prototype.updated_at = null;
    
            /**
             * CharacterGender checksum.
             * @member {string} checksum
             * @memberof proto.CharacterGender
             * @instance
             */
            CharacterGender.prototype.checksum = "";
    
            /**
             * Gets the default type url for CharacterGender
             * @function getTypeUrl
             * @memberof proto.CharacterGender
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CharacterGender.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CharacterGender";
            };
    
            return CharacterGender;
        })();
    
        proto.CharacterMugShotResult = (function() {
    
            /**
             * Properties of a CharacterMugShotResult.
             * @memberof proto
             * @interface ICharacterMugShotResult
             * @property {Array.<proto.ICharacterMugShot>|null} [charactermugshots] CharacterMugShotResult charactermugshots
             */
    
            /**
             * Constructs a new CharacterMugShotResult.
             * @memberof proto
             * @classdesc Represents a CharacterMugShotResult.
             * @implements ICharacterMugShotResult
             * @constructor
             * @param {proto.ICharacterMugShotResult=} [properties] Properties to set
             */
            function CharacterMugShotResult(properties) {
                this.charactermugshots = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CharacterMugShotResult charactermugshots.
             * @member {Array.<proto.ICharacterMugShot>} charactermugshots
             * @memberof proto.CharacterMugShotResult
             * @instance
             */
            CharacterMugShotResult.prototype.charactermugshots = $util.emptyArray;
    
            /**
             * Gets the default type url for CharacterMugShotResult
             * @function getTypeUrl
             * @memberof proto.CharacterMugShotResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CharacterMugShotResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CharacterMugShotResult";
            };
    
            return CharacterMugShotResult;
        })();
    
        proto.CharacterMugShot = (function() {
    
            /**
             * Properties of a CharacterMugShot.
             * @memberof proto
             * @interface ICharacterMugShot
             * @property {number|null} [id] CharacterMugShot id
             * @property {boolean|null} [alpha_channel] CharacterMugShot alpha_channel
             * @property {boolean|null} [animated] CharacterMugShot animated
             * @property {number|null} [height] CharacterMugShot height
             * @property {string|null} [image_id] CharacterMugShot image_id
             * @property {string|null} [url] CharacterMugShot url
             * @property {number|null} [width] CharacterMugShot width
             * @property {string|null} [checksum] CharacterMugShot checksum
             */
    
            /**
             * Constructs a new CharacterMugShot.
             * @memberof proto
             * @classdesc Represents a CharacterMugShot.
             * @implements ICharacterMugShot
             * @constructor
             * @param {proto.ICharacterMugShot=} [properties] Properties to set
             */
            function CharacterMugShot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CharacterMugShot id.
             * @member {number} id
             * @memberof proto.CharacterMugShot
             * @instance
             */
            CharacterMugShot.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * CharacterMugShot alpha_channel.
             * @member {boolean} alpha_channel
             * @memberof proto.CharacterMugShot
             * @instance
             */
            CharacterMugShot.prototype.alpha_channel = false;
    
            /**
             * CharacterMugShot animated.
             * @member {boolean} animated
             * @memberof proto.CharacterMugShot
             * @instance
             */
            CharacterMugShot.prototype.animated = false;
    
            /**
             * CharacterMugShot height.
             * @member {number} height
             * @memberof proto.CharacterMugShot
             * @instance
             */
            CharacterMugShot.prototype.height = 0;
    
            /**
             * CharacterMugShot image_id.
             * @member {string} image_id
             * @memberof proto.CharacterMugShot
             * @instance
             */
            CharacterMugShot.prototype.image_id = "";
    
            /**
             * CharacterMugShot url.
             * @member {string} url
             * @memberof proto.CharacterMugShot
             * @instance
             */
            CharacterMugShot.prototype.url = "";
    
            /**
             * CharacterMugShot width.
             * @member {number} width
             * @memberof proto.CharacterMugShot
             * @instance
             */
            CharacterMugShot.prototype.width = 0;
    
            /**
             * CharacterMugShot checksum.
             * @member {string} checksum
             * @memberof proto.CharacterMugShot
             * @instance
             */
            CharacterMugShot.prototype.checksum = "";
    
            /**
             * Gets the default type url for CharacterMugShot
             * @function getTypeUrl
             * @memberof proto.CharacterMugShot
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CharacterMugShot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CharacterMugShot";
            };
    
            return CharacterMugShot;
        })();
    
        proto.CharacterSpecieResult = (function() {
    
            /**
             * Properties of a CharacterSpecieResult.
             * @memberof proto
             * @interface ICharacterSpecieResult
             * @property {Array.<proto.ICharacterSpecie>|null} [characterspecies] CharacterSpecieResult characterspecies
             */
    
            /**
             * Constructs a new CharacterSpecieResult.
             * @memberof proto
             * @classdesc Represents a CharacterSpecieResult.
             * @implements ICharacterSpecieResult
             * @constructor
             * @param {proto.ICharacterSpecieResult=} [properties] Properties to set
             */
            function CharacterSpecieResult(properties) {
                this.characterspecies = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CharacterSpecieResult characterspecies.
             * @member {Array.<proto.ICharacterSpecie>} characterspecies
             * @memberof proto.CharacterSpecieResult
             * @instance
             */
            CharacterSpecieResult.prototype.characterspecies = $util.emptyArray;
    
            /**
             * Gets the default type url for CharacterSpecieResult
             * @function getTypeUrl
             * @memberof proto.CharacterSpecieResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CharacterSpecieResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CharacterSpecieResult";
            };
    
            return CharacterSpecieResult;
        })();
    
        proto.CharacterSpecie = (function() {
    
            /**
             * Properties of a CharacterSpecie.
             * @memberof proto
             * @interface ICharacterSpecie
             * @property {number|null} [id] CharacterSpecie id
             * @property {string|null} [name] CharacterSpecie name
             * @property {number|null} [created_at] CharacterSpecie created_at
             * @property {number|null} [updated_at] CharacterSpecie updated_at
             * @property {string|null} [checksum] CharacterSpecie checksum
             */
    
            /**
             * Constructs a new CharacterSpecie.
             * @memberof proto
             * @classdesc Represents a CharacterSpecie.
             * @implements ICharacterSpecie
             * @constructor
             * @param {proto.ICharacterSpecie=} [properties] Properties to set
             */
            function CharacterSpecie(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CharacterSpecie id.
             * @member {number} id
             * @memberof proto.CharacterSpecie
             * @instance
             */
            CharacterSpecie.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * CharacterSpecie name.
             * @member {string} name
             * @memberof proto.CharacterSpecie
             * @instance
             */
            CharacterSpecie.prototype.name = "";
    
            /**
             * CharacterSpecie created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.CharacterSpecie
             * @instance
             */
            CharacterSpecie.prototype.created_at = null;
    
            /**
             * CharacterSpecie updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.CharacterSpecie
             * @instance
             */
            CharacterSpecie.prototype.updated_at = null;
    
            /**
             * CharacterSpecie checksum.
             * @member {string} checksum
             * @memberof proto.CharacterSpecie
             * @instance
             */
            CharacterSpecie.prototype.checksum = "";
    
            /**
             * Gets the default type url for CharacterSpecie
             * @function getTypeUrl
             * @memberof proto.CharacterSpecie
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CharacterSpecie.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CharacterSpecie";
            };
    
            return CharacterSpecie;
        })();
    
        proto.CollectionResult = (function() {
    
            /**
             * Properties of a CollectionResult.
             * @memberof proto
             * @interface ICollectionResult
             * @property {Array.<proto.ICollection>|null} [collections] CollectionResult collections
             */
    
            /**
             * Constructs a new CollectionResult.
             * @memberof proto
             * @classdesc Represents a CollectionResult.
             * @implements ICollectionResult
             * @constructor
             * @param {proto.ICollectionResult=} [properties] Properties to set
             */
            function CollectionResult(properties) {
                this.collections = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CollectionResult collections.
             * @member {Array.<proto.ICollection>} collections
             * @memberof proto.CollectionResult
             * @instance
             */
            CollectionResult.prototype.collections = $util.emptyArray;
    
            /**
             * Gets the default type url for CollectionResult
             * @function getTypeUrl
             * @memberof proto.CollectionResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CollectionResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CollectionResult";
            };
    
            return CollectionResult;
        })();
    
        proto.Collection = (function() {
    
            /**
             * Properties of a Collection.
             * @memberof proto
             * @interface ICollection
             * @property {number|null} [id] Collection id
             * @property {number|null} [created_at] Collection created_at
             * @property {Array.<proto.IGame>|null} [games] Collection games
             * @property {string|null} [name] Collection name
             * @property {string|null} [slug] Collection slug
             * @property {number|null} [updated_at] Collection updated_at
             * @property {string|null} [url] Collection url
             * @property {string|null} [checksum] Collection checksum
             * @property {proto.ICollectionType|null} [type] Collection type
             * @property {Array.<proto.ICollectionRelation>|null} [as_parent_relations] Collection as_parent_relations
             * @property {Array.<proto.ICollectionRelation>|null} [as_child_relations] Collection as_child_relations
             */
    
            /**
             * Constructs a new Collection.
             * @memberof proto
             * @classdesc Represents a Collection.
             * @implements ICollection
             * @constructor
             * @param {proto.ICollection=} [properties] Properties to set
             */
            function Collection(properties) {
                this.games = [];
                this.as_parent_relations = [];
                this.as_child_relations = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Collection id.
             * @member {number} id
             * @memberof proto.Collection
             * @instance
             */
            Collection.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Collection created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.Collection
             * @instance
             */
            Collection.prototype.created_at = null;
    
            /**
             * Collection games.
             * @member {Array.<proto.IGame>} games
             * @memberof proto.Collection
             * @instance
             */
            Collection.prototype.games = $util.emptyArray;
    
            /**
             * Collection name.
             * @member {string} name
             * @memberof proto.Collection
             * @instance
             */
            Collection.prototype.name = "";
    
            /**
             * Collection slug.
             * @member {string} slug
             * @memberof proto.Collection
             * @instance
             */
            Collection.prototype.slug = "";
    
            /**
             * Collection updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.Collection
             * @instance
             */
            Collection.prototype.updated_at = null;
    
            /**
             * Collection url.
             * @member {string} url
             * @memberof proto.Collection
             * @instance
             */
            Collection.prototype.url = "";
    
            /**
             * Collection checksum.
             * @member {string} checksum
             * @memberof proto.Collection
             * @instance
             */
            Collection.prototype.checksum = "";
    
            /**
             * Collection type.
             * @member {proto.ICollectionType|null|undefined} type
             * @memberof proto.Collection
             * @instance
             */
            Collection.prototype.type = null;
    
            /**
             * Collection as_parent_relations.
             * @member {Array.<proto.ICollectionRelation>} as_parent_relations
             * @memberof proto.Collection
             * @instance
             */
            Collection.prototype.as_parent_relations = $util.emptyArray;
    
            /**
             * Collection as_child_relations.
             * @member {Array.<proto.ICollectionRelation>} as_child_relations
             * @memberof proto.Collection
             * @instance
             */
            Collection.prototype.as_child_relations = $util.emptyArray;
    
            /**
             * Gets the default type url for Collection
             * @function getTypeUrl
             * @memberof proto.Collection
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Collection.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Collection";
            };
    
            return Collection;
        })();
    
        proto.CollectionMembershipResult = (function() {
    
            /**
             * Properties of a CollectionMembershipResult.
             * @memberof proto
             * @interface ICollectionMembershipResult
             * @property {Array.<proto.ICollectionMembership>|null} [collectionmemberships] CollectionMembershipResult collectionmemberships
             */
    
            /**
             * Constructs a new CollectionMembershipResult.
             * @memberof proto
             * @classdesc Represents a CollectionMembershipResult.
             * @implements ICollectionMembershipResult
             * @constructor
             * @param {proto.ICollectionMembershipResult=} [properties] Properties to set
             */
            function CollectionMembershipResult(properties) {
                this.collectionmemberships = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CollectionMembershipResult collectionmemberships.
             * @member {Array.<proto.ICollectionMembership>} collectionmemberships
             * @memberof proto.CollectionMembershipResult
             * @instance
             */
            CollectionMembershipResult.prototype.collectionmemberships = $util.emptyArray;
    
            /**
             * Gets the default type url for CollectionMembershipResult
             * @function getTypeUrl
             * @memberof proto.CollectionMembershipResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CollectionMembershipResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CollectionMembershipResult";
            };
    
            return CollectionMembershipResult;
        })();
    
        proto.CollectionMembership = (function() {
    
            /**
             * Properties of a CollectionMembership.
             * @memberof proto
             * @interface ICollectionMembership
             * @property {number|null} [id] CollectionMembership id
             * @property {proto.IGame|null} [game] CollectionMembership game
             * @property {proto.ICollection|null} [collection] CollectionMembership collection
             * @property {proto.ICollectionMembershipType|null} [type] CollectionMembership type
             * @property {number|null} [updated_at] CollectionMembership updated_at
             * @property {number|null} [created_at] CollectionMembership created_at
             * @property {string|null} [checksum] CollectionMembership checksum
             */
    
            /**
             * Constructs a new CollectionMembership.
             * @memberof proto
             * @classdesc Represents a CollectionMembership.
             * @implements ICollectionMembership
             * @constructor
             * @param {proto.ICollectionMembership=} [properties] Properties to set
             */
            function CollectionMembership(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CollectionMembership id.
             * @member {number} id
             * @memberof proto.CollectionMembership
             * @instance
             */
            CollectionMembership.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * CollectionMembership game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.CollectionMembership
             * @instance
             */
            CollectionMembership.prototype.game = null;
    
            /**
             * CollectionMembership collection.
             * @member {proto.ICollection|null|undefined} collection
             * @memberof proto.CollectionMembership
             * @instance
             */
            CollectionMembership.prototype.collection = null;
    
            /**
             * CollectionMembership type.
             * @member {proto.ICollectionMembershipType|null|undefined} type
             * @memberof proto.CollectionMembership
             * @instance
             */
            CollectionMembership.prototype.type = null;
    
            /**
             * CollectionMembership updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.CollectionMembership
             * @instance
             */
            CollectionMembership.prototype.updated_at = null;
    
            /**
             * CollectionMembership created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.CollectionMembership
             * @instance
             */
            CollectionMembership.prototype.created_at = null;
    
            /**
             * CollectionMembership checksum.
             * @member {string} checksum
             * @memberof proto.CollectionMembership
             * @instance
             */
            CollectionMembership.prototype.checksum = "";
    
            /**
             * Gets the default type url for CollectionMembership
             * @function getTypeUrl
             * @memberof proto.CollectionMembership
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CollectionMembership.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CollectionMembership";
            };
    
            return CollectionMembership;
        })();
    
        proto.CollectionMembershipTypeResult = (function() {
    
            /**
             * Properties of a CollectionMembershipTypeResult.
             * @memberof proto
             * @interface ICollectionMembershipTypeResult
             * @property {Array.<proto.ICollectionMembershipType>|null} [collectionmembershiptypes] CollectionMembershipTypeResult collectionmembershiptypes
             */
    
            /**
             * Constructs a new CollectionMembershipTypeResult.
             * @memberof proto
             * @classdesc Represents a CollectionMembershipTypeResult.
             * @implements ICollectionMembershipTypeResult
             * @constructor
             * @param {proto.ICollectionMembershipTypeResult=} [properties] Properties to set
             */
            function CollectionMembershipTypeResult(properties) {
                this.collectionmembershiptypes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CollectionMembershipTypeResult collectionmembershiptypes.
             * @member {Array.<proto.ICollectionMembershipType>} collectionmembershiptypes
             * @memberof proto.CollectionMembershipTypeResult
             * @instance
             */
            CollectionMembershipTypeResult.prototype.collectionmembershiptypes = $util.emptyArray;
    
            /**
             * Gets the default type url for CollectionMembershipTypeResult
             * @function getTypeUrl
             * @memberof proto.CollectionMembershipTypeResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CollectionMembershipTypeResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CollectionMembershipTypeResult";
            };
    
            return CollectionMembershipTypeResult;
        })();
    
        proto.CollectionMembershipType = (function() {
    
            /**
             * Properties of a CollectionMembershipType.
             * @memberof proto
             * @interface ICollectionMembershipType
             * @property {number|null} [id] CollectionMembershipType id
             * @property {string|null} [name] CollectionMembershipType name
             * @property {string|null} [description] CollectionMembershipType description
             * @property {proto.ICollectionType|null} [allowed_collection_type] CollectionMembershipType allowed_collection_type
             * @property {number|null} [updated_at] CollectionMembershipType updated_at
             * @property {number|null} [created_at] CollectionMembershipType created_at
             * @property {string|null} [checksum] CollectionMembershipType checksum
             */
    
            /**
             * Constructs a new CollectionMembershipType.
             * @memberof proto
             * @classdesc Represents a CollectionMembershipType.
             * @implements ICollectionMembershipType
             * @constructor
             * @param {proto.ICollectionMembershipType=} [properties] Properties to set
             */
            function CollectionMembershipType(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CollectionMembershipType id.
             * @member {number} id
             * @memberof proto.CollectionMembershipType
             * @instance
             */
            CollectionMembershipType.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * CollectionMembershipType name.
             * @member {string} name
             * @memberof proto.CollectionMembershipType
             * @instance
             */
            CollectionMembershipType.prototype.name = "";
    
            /**
             * CollectionMembershipType description.
             * @member {string} description
             * @memberof proto.CollectionMembershipType
             * @instance
             */
            CollectionMembershipType.prototype.description = "";
    
            /**
             * CollectionMembershipType allowed_collection_type.
             * @member {proto.ICollectionType|null|undefined} allowed_collection_type
             * @memberof proto.CollectionMembershipType
             * @instance
             */
            CollectionMembershipType.prototype.allowed_collection_type = null;
    
            /**
             * CollectionMembershipType updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.CollectionMembershipType
             * @instance
             */
            CollectionMembershipType.prototype.updated_at = null;
    
            /**
             * CollectionMembershipType created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.CollectionMembershipType
             * @instance
             */
            CollectionMembershipType.prototype.created_at = null;
    
            /**
             * CollectionMembershipType checksum.
             * @member {string} checksum
             * @memberof proto.CollectionMembershipType
             * @instance
             */
            CollectionMembershipType.prototype.checksum = "";
    
            /**
             * Gets the default type url for CollectionMembershipType
             * @function getTypeUrl
             * @memberof proto.CollectionMembershipType
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CollectionMembershipType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CollectionMembershipType";
            };
    
            return CollectionMembershipType;
        })();
    
        proto.CollectionRelationResult = (function() {
    
            /**
             * Properties of a CollectionRelationResult.
             * @memberof proto
             * @interface ICollectionRelationResult
             * @property {Array.<proto.ICollectionRelation>|null} [collectionrelations] CollectionRelationResult collectionrelations
             */
    
            /**
             * Constructs a new CollectionRelationResult.
             * @memberof proto
             * @classdesc Represents a CollectionRelationResult.
             * @implements ICollectionRelationResult
             * @constructor
             * @param {proto.ICollectionRelationResult=} [properties] Properties to set
             */
            function CollectionRelationResult(properties) {
                this.collectionrelations = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CollectionRelationResult collectionrelations.
             * @member {Array.<proto.ICollectionRelation>} collectionrelations
             * @memberof proto.CollectionRelationResult
             * @instance
             */
            CollectionRelationResult.prototype.collectionrelations = $util.emptyArray;
    
            /**
             * Gets the default type url for CollectionRelationResult
             * @function getTypeUrl
             * @memberof proto.CollectionRelationResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CollectionRelationResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CollectionRelationResult";
            };
    
            return CollectionRelationResult;
        })();
    
        proto.CollectionRelation = (function() {
    
            /**
             * Properties of a CollectionRelation.
             * @memberof proto
             * @interface ICollectionRelation
             * @property {number|null} [id] CollectionRelation id
             * @property {proto.ICollection|null} [child_collection] CollectionRelation child_collection
             * @property {proto.ICollection|null} [parent_collection] CollectionRelation parent_collection
             * @property {proto.ICollectionRelationType|null} [type] CollectionRelation type
             * @property {number|null} [updated_at] CollectionRelation updated_at
             * @property {number|null} [created_at] CollectionRelation created_at
             * @property {string|null} [checksum] CollectionRelation checksum
             */
    
            /**
             * Constructs a new CollectionRelation.
             * @memberof proto
             * @classdesc Represents a CollectionRelation.
             * @implements ICollectionRelation
             * @constructor
             * @param {proto.ICollectionRelation=} [properties] Properties to set
             */
            function CollectionRelation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CollectionRelation id.
             * @member {number} id
             * @memberof proto.CollectionRelation
             * @instance
             */
            CollectionRelation.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * CollectionRelation child_collection.
             * @member {proto.ICollection|null|undefined} child_collection
             * @memberof proto.CollectionRelation
             * @instance
             */
            CollectionRelation.prototype.child_collection = null;
    
            /**
             * CollectionRelation parent_collection.
             * @member {proto.ICollection|null|undefined} parent_collection
             * @memberof proto.CollectionRelation
             * @instance
             */
            CollectionRelation.prototype.parent_collection = null;
    
            /**
             * CollectionRelation type.
             * @member {proto.ICollectionRelationType|null|undefined} type
             * @memberof proto.CollectionRelation
             * @instance
             */
            CollectionRelation.prototype.type = null;
    
            /**
             * CollectionRelation updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.CollectionRelation
             * @instance
             */
            CollectionRelation.prototype.updated_at = null;
    
            /**
             * CollectionRelation created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.CollectionRelation
             * @instance
             */
            CollectionRelation.prototype.created_at = null;
    
            /**
             * CollectionRelation checksum.
             * @member {string} checksum
             * @memberof proto.CollectionRelation
             * @instance
             */
            CollectionRelation.prototype.checksum = "";
    
            /**
             * Gets the default type url for CollectionRelation
             * @function getTypeUrl
             * @memberof proto.CollectionRelation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CollectionRelation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CollectionRelation";
            };
    
            return CollectionRelation;
        })();
    
        proto.CollectionRelationTypeResult = (function() {
    
            /**
             * Properties of a CollectionRelationTypeResult.
             * @memberof proto
             * @interface ICollectionRelationTypeResult
             * @property {Array.<proto.ICollectionRelationType>|null} [collectionrelationtypes] CollectionRelationTypeResult collectionrelationtypes
             */
    
            /**
             * Constructs a new CollectionRelationTypeResult.
             * @memberof proto
             * @classdesc Represents a CollectionRelationTypeResult.
             * @implements ICollectionRelationTypeResult
             * @constructor
             * @param {proto.ICollectionRelationTypeResult=} [properties] Properties to set
             */
            function CollectionRelationTypeResult(properties) {
                this.collectionrelationtypes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CollectionRelationTypeResult collectionrelationtypes.
             * @member {Array.<proto.ICollectionRelationType>} collectionrelationtypes
             * @memberof proto.CollectionRelationTypeResult
             * @instance
             */
            CollectionRelationTypeResult.prototype.collectionrelationtypes = $util.emptyArray;
    
            /**
             * Gets the default type url for CollectionRelationTypeResult
             * @function getTypeUrl
             * @memberof proto.CollectionRelationTypeResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CollectionRelationTypeResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CollectionRelationTypeResult";
            };
    
            return CollectionRelationTypeResult;
        })();
    
        proto.CollectionRelationType = (function() {
    
            /**
             * Properties of a CollectionRelationType.
             * @memberof proto
             * @interface ICollectionRelationType
             * @property {number|null} [id] CollectionRelationType id
             * @property {string|null} [name] CollectionRelationType name
             * @property {string|null} [description] CollectionRelationType description
             * @property {proto.ICollectionType|null} [allowed_child_type] CollectionRelationType allowed_child_type
             * @property {proto.ICollectionType|null} [allowed_parent_type] CollectionRelationType allowed_parent_type
             * @property {number|null} [updated_at] CollectionRelationType updated_at
             * @property {number|null} [created_at] CollectionRelationType created_at
             * @property {string|null} [checksum] CollectionRelationType checksum
             */
    
            /**
             * Constructs a new CollectionRelationType.
             * @memberof proto
             * @classdesc Represents a CollectionRelationType.
             * @implements ICollectionRelationType
             * @constructor
             * @param {proto.ICollectionRelationType=} [properties] Properties to set
             */
            function CollectionRelationType(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CollectionRelationType id.
             * @member {number} id
             * @memberof proto.CollectionRelationType
             * @instance
             */
            CollectionRelationType.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * CollectionRelationType name.
             * @member {string} name
             * @memberof proto.CollectionRelationType
             * @instance
             */
            CollectionRelationType.prototype.name = "";
    
            /**
             * CollectionRelationType description.
             * @member {string} description
             * @memberof proto.CollectionRelationType
             * @instance
             */
            CollectionRelationType.prototype.description = "";
    
            /**
             * CollectionRelationType allowed_child_type.
             * @member {proto.ICollectionType|null|undefined} allowed_child_type
             * @memberof proto.CollectionRelationType
             * @instance
             */
            CollectionRelationType.prototype.allowed_child_type = null;
    
            /**
             * CollectionRelationType allowed_parent_type.
             * @member {proto.ICollectionType|null|undefined} allowed_parent_type
             * @memberof proto.CollectionRelationType
             * @instance
             */
            CollectionRelationType.prototype.allowed_parent_type = null;
    
            /**
             * CollectionRelationType updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.CollectionRelationType
             * @instance
             */
            CollectionRelationType.prototype.updated_at = null;
    
            /**
             * CollectionRelationType created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.CollectionRelationType
             * @instance
             */
            CollectionRelationType.prototype.created_at = null;
    
            /**
             * CollectionRelationType checksum.
             * @member {string} checksum
             * @memberof proto.CollectionRelationType
             * @instance
             */
            CollectionRelationType.prototype.checksum = "";
    
            /**
             * Gets the default type url for CollectionRelationType
             * @function getTypeUrl
             * @memberof proto.CollectionRelationType
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CollectionRelationType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CollectionRelationType";
            };
    
            return CollectionRelationType;
        })();
    
        proto.CollectionTypeResult = (function() {
    
            /**
             * Properties of a CollectionTypeResult.
             * @memberof proto
             * @interface ICollectionTypeResult
             * @property {Array.<proto.ICollectionType>|null} [collectiontypes] CollectionTypeResult collectiontypes
             */
    
            /**
             * Constructs a new CollectionTypeResult.
             * @memberof proto
             * @classdesc Represents a CollectionTypeResult.
             * @implements ICollectionTypeResult
             * @constructor
             * @param {proto.ICollectionTypeResult=} [properties] Properties to set
             */
            function CollectionTypeResult(properties) {
                this.collectiontypes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CollectionTypeResult collectiontypes.
             * @member {Array.<proto.ICollectionType>} collectiontypes
             * @memberof proto.CollectionTypeResult
             * @instance
             */
            CollectionTypeResult.prototype.collectiontypes = $util.emptyArray;
    
            /**
             * Gets the default type url for CollectionTypeResult
             * @function getTypeUrl
             * @memberof proto.CollectionTypeResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CollectionTypeResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CollectionTypeResult";
            };
    
            return CollectionTypeResult;
        })();
    
        proto.CollectionType = (function() {
    
            /**
             * Properties of a CollectionType.
             * @memberof proto
             * @interface ICollectionType
             * @property {number|null} [id] CollectionType id
             * @property {string|null} [name] CollectionType name
             * @property {string|null} [description] CollectionType description
             * @property {number|null} [updated_at] CollectionType updated_at
             * @property {number|null} [created_at] CollectionType created_at
             * @property {string|null} [checksum] CollectionType checksum
             */
    
            /**
             * Constructs a new CollectionType.
             * @memberof proto
             * @classdesc Represents a CollectionType.
             * @implements ICollectionType
             * @constructor
             * @param {proto.ICollectionType=} [properties] Properties to set
             */
            function CollectionType(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CollectionType id.
             * @member {number} id
             * @memberof proto.CollectionType
             * @instance
             */
            CollectionType.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * CollectionType name.
             * @member {string} name
             * @memberof proto.CollectionType
             * @instance
             */
            CollectionType.prototype.name = "";
    
            /**
             * CollectionType description.
             * @member {string} description
             * @memberof proto.CollectionType
             * @instance
             */
            CollectionType.prototype.description = "";
    
            /**
             * CollectionType updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.CollectionType
             * @instance
             */
            CollectionType.prototype.updated_at = null;
    
            /**
             * CollectionType created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.CollectionType
             * @instance
             */
            CollectionType.prototype.created_at = null;
    
            /**
             * CollectionType checksum.
             * @member {string} checksum
             * @memberof proto.CollectionType
             * @instance
             */
            CollectionType.prototype.checksum = "";
    
            /**
             * Gets the default type url for CollectionType
             * @function getTypeUrl
             * @memberof proto.CollectionType
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CollectionType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CollectionType";
            };
    
            return CollectionType;
        })();
    
        proto.CompanyResult = (function() {
    
            /**
             * Properties of a CompanyResult.
             * @memberof proto
             * @interface ICompanyResult
             * @property {Array.<proto.ICompany>|null} [companies] CompanyResult companies
             */
    
            /**
             * Constructs a new CompanyResult.
             * @memberof proto
             * @classdesc Represents a CompanyResult.
             * @implements ICompanyResult
             * @constructor
             * @param {proto.ICompanyResult=} [properties] Properties to set
             */
            function CompanyResult(properties) {
                this.companies = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CompanyResult companies.
             * @member {Array.<proto.ICompany>} companies
             * @memberof proto.CompanyResult
             * @instance
             */
            CompanyResult.prototype.companies = $util.emptyArray;
    
            /**
             * Gets the default type url for CompanyResult
             * @function getTypeUrl
             * @memberof proto.CompanyResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CompanyResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CompanyResult";
            };
    
            return CompanyResult;
        })();
    
        proto.Company = (function() {
    
            /**
             * Properties of a Company.
             * @memberof proto
             * @interface ICompany
             * @property {number|null} [id] Company id
             * @property {number|null} [change_date] Company change_date
             * @property {proto.DateFormatChangeDateCategoryEnum|null} [change_date_category] Company change_date_category
             * @property {proto.ICompany|null} [changed_company_id] Company changed_company_id
             * @property {number|null} [country] Company country
             * @property {number|null} [created_at] Company created_at
             * @property {string|null} [description] Company description
             * @property {Array.<proto.IGame>|null} [developed] Company developed
             * @property {proto.ICompanyLogo|null} [logo] Company logo
             * @property {string|null} [name] Company name
             * @property {proto.ICompany|null} [parent] Company parent
             * @property {Array.<proto.IGame>|null} [published] Company published
             * @property {string|null} [slug] Company slug
             * @property {number|null} [start_date] Company start_date
             * @property {proto.DateFormatChangeDateCategoryEnum|null} [start_date_category] Company start_date_category
             * @property {number|null} [updated_at] Company updated_at
             * @property {string|null} [url] Company url
             * @property {Array.<proto.ICompanyWebsite>|null} [websites] Company websites
             * @property {string|null} [checksum] Company checksum
             * @property {proto.ICompanyStatus|null} [status] Company status
             * @property {proto.IDateFormat|null} [start_date_format] Company start_date_format
             * @property {proto.IDateFormat|null} [change_date_format] Company change_date_format
             */
    
            /**
             * Constructs a new Company.
             * @memberof proto
             * @classdesc Represents a Company.
             * @implements ICompany
             * @constructor
             * @param {proto.ICompany=} [properties] Properties to set
             */
            function Company(properties) {
                this.developed = [];
                this.published = [];
                this.websites = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Company id.
             * @member {number} id
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Company change_date.
             * @member {number|null|undefined} change_date
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.change_date = null;
    
            /**
             * Company change_date_category.
             * @member {proto.DateFormatChangeDateCategoryEnum} change_date_category
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.change_date_category = 0;
    
            /**
             * Company changed_company_id.
             * @member {proto.ICompany|null|undefined} changed_company_id
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.changed_company_id = null;
    
            /**
             * Company country.
             * @member {number} country
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.country = 0;
    
            /**
             * Company created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.created_at = null;
    
            /**
             * Company description.
             * @member {string} description
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.description = "";
    
            /**
             * Company developed.
             * @member {Array.<proto.IGame>} developed
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.developed = $util.emptyArray;
    
            /**
             * Company logo.
             * @member {proto.ICompanyLogo|null|undefined} logo
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.logo = null;
    
            /**
             * Company name.
             * @member {string} name
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.name = "";
    
            /**
             * Company parent.
             * @member {proto.ICompany|null|undefined} parent
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.parent = null;
    
            /**
             * Company published.
             * @member {Array.<proto.IGame>} published
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.published = $util.emptyArray;
    
            /**
             * Company slug.
             * @member {string} slug
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.slug = "";
    
            /**
             * Company start_date.
             * @member {number|null|undefined} start_date
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.start_date = null;
    
            /**
             * Company start_date_category.
             * @member {proto.DateFormatChangeDateCategoryEnum} start_date_category
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.start_date_category = 0;
    
            /**
             * Company updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.updated_at = null;
    
            /**
             * Company url.
             * @member {string} url
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.url = "";
    
            /**
             * Company websites.
             * @member {Array.<proto.ICompanyWebsite>} websites
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.websites = $util.emptyArray;
    
            /**
             * Company checksum.
             * @member {string} checksum
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.checksum = "";
    
            /**
             * Company status.
             * @member {proto.ICompanyStatus|null|undefined} status
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.status = null;
    
            /**
             * Company start_date_format.
             * @member {proto.IDateFormat|null|undefined} start_date_format
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.start_date_format = null;
    
            /**
             * Company change_date_format.
             * @member {proto.IDateFormat|null|undefined} change_date_format
             * @memberof proto.Company
             * @instance
             */
            Company.prototype.change_date_format = null;
    
            /**
             * Gets the default type url for Company
             * @function getTypeUrl
             * @memberof proto.Company
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Company.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Company";
            };
    
            return Company;
        })();
    
        /**
         * DateFormatChangeDateCategoryEnum enum.
         * @name proto.DateFormatChangeDateCategoryEnum
         * @enum {number}
         * @property {number} YYYYMMMMDD=0 YYYYMMMMDD value
         * @property {number} YYYYMMMM=1 YYYYMMMM value
         * @property {number} YYYY=2 YYYY value
         * @property {number} YYYYQ1=3 YYYYQ1 value
         * @property {number} YYYYQ2=4 YYYYQ2 value
         * @property {number} YYYYQ3=5 YYYYQ3 value
         * @property {number} YYYYQ4=6 YYYYQ4 value
         * @property {number} TBD=7 TBD value
         */
        proto.DateFormatChangeDateCategoryEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "YYYYMMMMDD"] = 0;
            values[valuesById[1] = "YYYYMMMM"] = 1;
            values[valuesById[2] = "YYYY"] = 2;
            values[valuesById[3] = "YYYYQ1"] = 3;
            values[valuesById[4] = "YYYYQ2"] = 4;
            values[valuesById[5] = "YYYYQ3"] = 5;
            values[valuesById[6] = "YYYYQ4"] = 6;
            values[valuesById[7] = "TBD"] = 7;
            return values;
        })();
    
        proto.CompanyLogoResult = (function() {
    
            /**
             * Properties of a CompanyLogoResult.
             * @memberof proto
             * @interface ICompanyLogoResult
             * @property {Array.<proto.ICompanyLogo>|null} [companylogos] CompanyLogoResult companylogos
             */
    
            /**
             * Constructs a new CompanyLogoResult.
             * @memberof proto
             * @classdesc Represents a CompanyLogoResult.
             * @implements ICompanyLogoResult
             * @constructor
             * @param {proto.ICompanyLogoResult=} [properties] Properties to set
             */
            function CompanyLogoResult(properties) {
                this.companylogos = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CompanyLogoResult companylogos.
             * @member {Array.<proto.ICompanyLogo>} companylogos
             * @memberof proto.CompanyLogoResult
             * @instance
             */
            CompanyLogoResult.prototype.companylogos = $util.emptyArray;
    
            /**
             * Gets the default type url for CompanyLogoResult
             * @function getTypeUrl
             * @memberof proto.CompanyLogoResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CompanyLogoResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CompanyLogoResult";
            };
    
            return CompanyLogoResult;
        })();
    
        proto.CompanyLogo = (function() {
    
            /**
             * Properties of a CompanyLogo.
             * @memberof proto
             * @interface ICompanyLogo
             * @property {number|null} [id] CompanyLogo id
             * @property {boolean|null} [alpha_channel] CompanyLogo alpha_channel
             * @property {boolean|null} [animated] CompanyLogo animated
             * @property {number|null} [height] CompanyLogo height
             * @property {string|null} [image_id] CompanyLogo image_id
             * @property {string|null} [url] CompanyLogo url
             * @property {number|null} [width] CompanyLogo width
             * @property {string|null} [checksum] CompanyLogo checksum
             */
    
            /**
             * Constructs a new CompanyLogo.
             * @memberof proto
             * @classdesc Represents a CompanyLogo.
             * @implements ICompanyLogo
             * @constructor
             * @param {proto.ICompanyLogo=} [properties] Properties to set
             */
            function CompanyLogo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CompanyLogo id.
             * @member {number} id
             * @memberof proto.CompanyLogo
             * @instance
             */
            CompanyLogo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * CompanyLogo alpha_channel.
             * @member {boolean} alpha_channel
             * @memberof proto.CompanyLogo
             * @instance
             */
            CompanyLogo.prototype.alpha_channel = false;
    
            /**
             * CompanyLogo animated.
             * @member {boolean} animated
             * @memberof proto.CompanyLogo
             * @instance
             */
            CompanyLogo.prototype.animated = false;
    
            /**
             * CompanyLogo height.
             * @member {number} height
             * @memberof proto.CompanyLogo
             * @instance
             */
            CompanyLogo.prototype.height = 0;
    
            /**
             * CompanyLogo image_id.
             * @member {string} image_id
             * @memberof proto.CompanyLogo
             * @instance
             */
            CompanyLogo.prototype.image_id = "";
    
            /**
             * CompanyLogo url.
             * @member {string} url
             * @memberof proto.CompanyLogo
             * @instance
             */
            CompanyLogo.prototype.url = "";
    
            /**
             * CompanyLogo width.
             * @member {number} width
             * @memberof proto.CompanyLogo
             * @instance
             */
            CompanyLogo.prototype.width = 0;
    
            /**
             * CompanyLogo checksum.
             * @member {string} checksum
             * @memberof proto.CompanyLogo
             * @instance
             */
            CompanyLogo.prototype.checksum = "";
    
            /**
             * Gets the default type url for CompanyLogo
             * @function getTypeUrl
             * @memberof proto.CompanyLogo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CompanyLogo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CompanyLogo";
            };
    
            return CompanyLogo;
        })();
    
        proto.CompanyStatusResult = (function() {
    
            /**
             * Properties of a CompanyStatusResult.
             * @memberof proto
             * @interface ICompanyStatusResult
             * @property {Array.<proto.ICompanyStatus>|null} [companystatuses] CompanyStatusResult companystatuses
             */
    
            /**
             * Constructs a new CompanyStatusResult.
             * @memberof proto
             * @classdesc Represents a CompanyStatusResult.
             * @implements ICompanyStatusResult
             * @constructor
             * @param {proto.ICompanyStatusResult=} [properties] Properties to set
             */
            function CompanyStatusResult(properties) {
                this.companystatuses = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CompanyStatusResult companystatuses.
             * @member {Array.<proto.ICompanyStatus>} companystatuses
             * @memberof proto.CompanyStatusResult
             * @instance
             */
            CompanyStatusResult.prototype.companystatuses = $util.emptyArray;
    
            /**
             * Gets the default type url for CompanyStatusResult
             * @function getTypeUrl
             * @memberof proto.CompanyStatusResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CompanyStatusResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CompanyStatusResult";
            };
    
            return CompanyStatusResult;
        })();
    
        proto.CompanyStatus = (function() {
    
            /**
             * Properties of a CompanyStatus.
             * @memberof proto
             * @interface ICompanyStatus
             * @property {number|null} [id] CompanyStatus id
             * @property {string|null} [name] CompanyStatus name
             * @property {number|null} [created_at] CompanyStatus created_at
             * @property {number|null} [updated_at] CompanyStatus updated_at
             * @property {string|null} [checksum] CompanyStatus checksum
             */
    
            /**
             * Constructs a new CompanyStatus.
             * @memberof proto
             * @classdesc Represents a CompanyStatus.
             * @implements ICompanyStatus
             * @constructor
             * @param {proto.ICompanyStatus=} [properties] Properties to set
             */
            function CompanyStatus(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CompanyStatus id.
             * @member {number} id
             * @memberof proto.CompanyStatus
             * @instance
             */
            CompanyStatus.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * CompanyStatus name.
             * @member {string} name
             * @memberof proto.CompanyStatus
             * @instance
             */
            CompanyStatus.prototype.name = "";
    
            /**
             * CompanyStatus created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.CompanyStatus
             * @instance
             */
            CompanyStatus.prototype.created_at = null;
    
            /**
             * CompanyStatus updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.CompanyStatus
             * @instance
             */
            CompanyStatus.prototype.updated_at = null;
    
            /**
             * CompanyStatus checksum.
             * @member {string} checksum
             * @memberof proto.CompanyStatus
             * @instance
             */
            CompanyStatus.prototype.checksum = "";
    
            /**
             * Gets the default type url for CompanyStatus
             * @function getTypeUrl
             * @memberof proto.CompanyStatus
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CompanyStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CompanyStatus";
            };
    
            return CompanyStatus;
        })();
    
        proto.CompanyWebsiteResult = (function() {
    
            /**
             * Properties of a CompanyWebsiteResult.
             * @memberof proto
             * @interface ICompanyWebsiteResult
             * @property {Array.<proto.ICompanyWebsite>|null} [companywebsites] CompanyWebsiteResult companywebsites
             */
    
            /**
             * Constructs a new CompanyWebsiteResult.
             * @memberof proto
             * @classdesc Represents a CompanyWebsiteResult.
             * @implements ICompanyWebsiteResult
             * @constructor
             * @param {proto.ICompanyWebsiteResult=} [properties] Properties to set
             */
            function CompanyWebsiteResult(properties) {
                this.companywebsites = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CompanyWebsiteResult companywebsites.
             * @member {Array.<proto.ICompanyWebsite>} companywebsites
             * @memberof proto.CompanyWebsiteResult
             * @instance
             */
            CompanyWebsiteResult.prototype.companywebsites = $util.emptyArray;
    
            /**
             * Gets the default type url for CompanyWebsiteResult
             * @function getTypeUrl
             * @memberof proto.CompanyWebsiteResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CompanyWebsiteResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CompanyWebsiteResult";
            };
    
            return CompanyWebsiteResult;
        })();
    
        proto.CompanyWebsite = (function() {
    
            /**
             * Properties of a CompanyWebsite.
             * @memberof proto
             * @interface ICompanyWebsite
             * @property {number|null} [id] CompanyWebsite id
             * @property {proto.WebsiteCategoryEnum|null} [category] CompanyWebsite category
             * @property {boolean|null} [trusted] CompanyWebsite trusted
             * @property {string|null} [url] CompanyWebsite url
             * @property {string|null} [checksum] CompanyWebsite checksum
             * @property {proto.IWebsiteType|null} [type] CompanyWebsite type
             */
    
            /**
             * Constructs a new CompanyWebsite.
             * @memberof proto
             * @classdesc Represents a CompanyWebsite.
             * @implements ICompanyWebsite
             * @constructor
             * @param {proto.ICompanyWebsite=} [properties] Properties to set
             */
            function CompanyWebsite(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CompanyWebsite id.
             * @member {number} id
             * @memberof proto.CompanyWebsite
             * @instance
             */
            CompanyWebsite.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * CompanyWebsite category.
             * @member {proto.WebsiteCategoryEnum} category
             * @memberof proto.CompanyWebsite
             * @instance
             */
            CompanyWebsite.prototype.category = 0;
    
            /**
             * CompanyWebsite trusted.
             * @member {boolean} trusted
             * @memberof proto.CompanyWebsite
             * @instance
             */
            CompanyWebsite.prototype.trusted = false;
    
            /**
             * CompanyWebsite url.
             * @member {string} url
             * @memberof proto.CompanyWebsite
             * @instance
             */
            CompanyWebsite.prototype.url = "";
    
            /**
             * CompanyWebsite checksum.
             * @member {string} checksum
             * @memberof proto.CompanyWebsite
             * @instance
             */
            CompanyWebsite.prototype.checksum = "";
    
            /**
             * CompanyWebsite type.
             * @member {proto.IWebsiteType|null|undefined} type
             * @memberof proto.CompanyWebsite
             * @instance
             */
            CompanyWebsite.prototype.type = null;
    
            /**
             * Gets the default type url for CompanyWebsite
             * @function getTypeUrl
             * @memberof proto.CompanyWebsite
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CompanyWebsite.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CompanyWebsite";
            };
    
            return CompanyWebsite;
        })();
    
        /**
         * WebsiteCategoryEnum enum.
         * @name proto.WebsiteCategoryEnum
         * @enum {number}
         * @property {number} WEBSITE_CATEGORY_NULL=0 WEBSITE_CATEGORY_NULL value
         * @property {number} WEBSITE_OFFICIAL=1 WEBSITE_OFFICIAL value
         * @property {number} WEBSITE_WIKIA=2 WEBSITE_WIKIA value
         * @property {number} WEBSITE_WIKIPEDIA=3 WEBSITE_WIKIPEDIA value
         * @property {number} WEBSITE_FACEBOOK=4 WEBSITE_FACEBOOK value
         * @property {number} WEBSITE_TWITTER=5 WEBSITE_TWITTER value
         * @property {number} WEBSITE_TWITCH=6 WEBSITE_TWITCH value
         * @property {number} WEBSITE_INSTAGRAM=8 WEBSITE_INSTAGRAM value
         * @property {number} WEBSITE_YOUTUBE=9 WEBSITE_YOUTUBE value
         * @property {number} WEBSITE_IPHONE=10 WEBSITE_IPHONE value
         * @property {number} WEBSITE_IPAD=11 WEBSITE_IPAD value
         * @property {number} WEBSITE_ANDROID=12 WEBSITE_ANDROID value
         * @property {number} WEBSITE_STEAM=13 WEBSITE_STEAM value
         * @property {number} WEBSITE_REDDIT=14 WEBSITE_REDDIT value
         * @property {number} WEBSITE_ITCH=15 WEBSITE_ITCH value
         * @property {number} WEBSITE_EPICGAMES=16 WEBSITE_EPICGAMES value
         * @property {number} WEBSITE_GOG=17 WEBSITE_GOG value
         * @property {number} WEBSITE_DISCORD=18 WEBSITE_DISCORD value
         * @property {number} WEBSITE_BLUESKY=19 WEBSITE_BLUESKY value
         */
        proto.WebsiteCategoryEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "WEBSITE_CATEGORY_NULL"] = 0;
            values[valuesById[1] = "WEBSITE_OFFICIAL"] = 1;
            values[valuesById[2] = "WEBSITE_WIKIA"] = 2;
            values[valuesById[3] = "WEBSITE_WIKIPEDIA"] = 3;
            values[valuesById[4] = "WEBSITE_FACEBOOK"] = 4;
            values[valuesById[5] = "WEBSITE_TWITTER"] = 5;
            values[valuesById[6] = "WEBSITE_TWITCH"] = 6;
            values[valuesById[8] = "WEBSITE_INSTAGRAM"] = 8;
            values[valuesById[9] = "WEBSITE_YOUTUBE"] = 9;
            values[valuesById[10] = "WEBSITE_IPHONE"] = 10;
            values[valuesById[11] = "WEBSITE_IPAD"] = 11;
            values[valuesById[12] = "WEBSITE_ANDROID"] = 12;
            values[valuesById[13] = "WEBSITE_STEAM"] = 13;
            values[valuesById[14] = "WEBSITE_REDDIT"] = 14;
            values[valuesById[15] = "WEBSITE_ITCH"] = 15;
            values[valuesById[16] = "WEBSITE_EPICGAMES"] = 16;
            values[valuesById[17] = "WEBSITE_GOG"] = 17;
            values[valuesById[18] = "WEBSITE_DISCORD"] = 18;
            values[valuesById[19] = "WEBSITE_BLUESKY"] = 19;
            return values;
        })();
    
        proto.CoverResult = (function() {
    
            /**
             * Properties of a CoverResult.
             * @memberof proto
             * @interface ICoverResult
             * @property {Array.<proto.ICover>|null} [covers] CoverResult covers
             */
    
            /**
             * Constructs a new CoverResult.
             * @memberof proto
             * @classdesc Represents a CoverResult.
             * @implements ICoverResult
             * @constructor
             * @param {proto.ICoverResult=} [properties] Properties to set
             */
            function CoverResult(properties) {
                this.covers = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * CoverResult covers.
             * @member {Array.<proto.ICover>} covers
             * @memberof proto.CoverResult
             * @instance
             */
            CoverResult.prototype.covers = $util.emptyArray;
    
            /**
             * Gets the default type url for CoverResult
             * @function getTypeUrl
             * @memberof proto.CoverResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CoverResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.CoverResult";
            };
    
            return CoverResult;
        })();
    
        proto.Cover = (function() {
    
            /**
             * Properties of a Cover.
             * @memberof proto
             * @interface ICover
             * @property {number|null} [id] Cover id
             * @property {boolean|null} [alpha_channel] Cover alpha_channel
             * @property {boolean|null} [animated] Cover animated
             * @property {proto.IGame|null} [game] Cover game
             * @property {number|null} [height] Cover height
             * @property {string|null} [image_id] Cover image_id
             * @property {string|null} [url] Cover url
             * @property {number|null} [width] Cover width
             * @property {string|null} [checksum] Cover checksum
             * @property {proto.IGameLocalization|null} [game_localization] Cover game_localization
             */
    
            /**
             * Constructs a new Cover.
             * @memberof proto
             * @classdesc Represents a Cover.
             * @implements ICover
             * @constructor
             * @param {proto.ICover=} [properties] Properties to set
             */
            function Cover(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Cover id.
             * @member {number} id
             * @memberof proto.Cover
             * @instance
             */
            Cover.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Cover alpha_channel.
             * @member {boolean} alpha_channel
             * @memberof proto.Cover
             * @instance
             */
            Cover.prototype.alpha_channel = false;
    
            /**
             * Cover animated.
             * @member {boolean} animated
             * @memberof proto.Cover
             * @instance
             */
            Cover.prototype.animated = false;
    
            /**
             * Cover game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.Cover
             * @instance
             */
            Cover.prototype.game = null;
    
            /**
             * Cover height.
             * @member {number} height
             * @memberof proto.Cover
             * @instance
             */
            Cover.prototype.height = 0;
    
            /**
             * Cover image_id.
             * @member {string} image_id
             * @memberof proto.Cover
             * @instance
             */
            Cover.prototype.image_id = "";
    
            /**
             * Cover url.
             * @member {string} url
             * @memberof proto.Cover
             * @instance
             */
            Cover.prototype.url = "";
    
            /**
             * Cover width.
             * @member {number} width
             * @memberof proto.Cover
             * @instance
             */
            Cover.prototype.width = 0;
    
            /**
             * Cover checksum.
             * @member {string} checksum
             * @memberof proto.Cover
             * @instance
             */
            Cover.prototype.checksum = "";
    
            /**
             * Cover game_localization.
             * @member {proto.IGameLocalization|null|undefined} game_localization
             * @memberof proto.Cover
             * @instance
             */
            Cover.prototype.game_localization = null;
    
            /**
             * Gets the default type url for Cover
             * @function getTypeUrl
             * @memberof proto.Cover
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Cover.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Cover";
            };
    
            return Cover;
        })();
    
        proto.DateFormatResult = (function() {
    
            /**
             * Properties of a DateFormatResult.
             * @memberof proto
             * @interface IDateFormatResult
             * @property {Array.<proto.IDateFormat>|null} [dateformats] DateFormatResult dateformats
             */
    
            /**
             * Constructs a new DateFormatResult.
             * @memberof proto
             * @classdesc Represents a DateFormatResult.
             * @implements IDateFormatResult
             * @constructor
             * @param {proto.IDateFormatResult=} [properties] Properties to set
             */
            function DateFormatResult(properties) {
                this.dateformats = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DateFormatResult dateformats.
             * @member {Array.<proto.IDateFormat>} dateformats
             * @memberof proto.DateFormatResult
             * @instance
             */
            DateFormatResult.prototype.dateformats = $util.emptyArray;
    
            /**
             * Gets the default type url for DateFormatResult
             * @function getTypeUrl
             * @memberof proto.DateFormatResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DateFormatResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.DateFormatResult";
            };
    
            return DateFormatResult;
        })();
    
        proto.DateFormat = (function() {
    
            /**
             * Properties of a DateFormat.
             * @memberof proto
             * @interface IDateFormat
             * @property {number|null} [id] DateFormat id
             * @property {string|null} [format] DateFormat format
             * @property {number|null} [created_at] DateFormat created_at
             * @property {number|null} [updated_at] DateFormat updated_at
             * @property {string|null} [checksum] DateFormat checksum
             */
    
            /**
             * Constructs a new DateFormat.
             * @memberof proto
             * @classdesc Represents a DateFormat.
             * @implements IDateFormat
             * @constructor
             * @param {proto.IDateFormat=} [properties] Properties to set
             */
            function DateFormat(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * DateFormat id.
             * @member {number} id
             * @memberof proto.DateFormat
             * @instance
             */
            DateFormat.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * DateFormat format.
             * @member {string} format
             * @memberof proto.DateFormat
             * @instance
             */
            DateFormat.prototype.format = "";
    
            /**
             * DateFormat created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.DateFormat
             * @instance
             */
            DateFormat.prototype.created_at = null;
    
            /**
             * DateFormat updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.DateFormat
             * @instance
             */
            DateFormat.prototype.updated_at = null;
    
            /**
             * DateFormat checksum.
             * @member {string} checksum
             * @memberof proto.DateFormat
             * @instance
             */
            DateFormat.prototype.checksum = "";
    
            /**
             * Gets the default type url for DateFormat
             * @function getTypeUrl
             * @memberof proto.DateFormat
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DateFormat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.DateFormat";
            };
    
            return DateFormat;
        })();
    
        proto.EventResult = (function() {
    
            /**
             * Properties of an EventResult.
             * @memberof proto
             * @interface IEventResult
             * @property {Array.<proto.IEvent>|null} [events] EventResult events
             */
    
            /**
             * Constructs a new EventResult.
             * @memberof proto
             * @classdesc Represents an EventResult.
             * @implements IEventResult
             * @constructor
             * @param {proto.IEventResult=} [properties] Properties to set
             */
            function EventResult(properties) {
                this.events = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * EventResult events.
             * @member {Array.<proto.IEvent>} events
             * @memberof proto.EventResult
             * @instance
             */
            EventResult.prototype.events = $util.emptyArray;
    
            /**
             * Gets the default type url for EventResult
             * @function getTypeUrl
             * @memberof proto.EventResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EventResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.EventResult";
            };
    
            return EventResult;
        })();
    
        proto.Event = (function() {
    
            /**
             * Properties of an Event.
             * @memberof proto
             * @interface IEvent
             * @property {number|null} [id] Event id
             * @property {string|null} [name] Event name
             * @property {string|null} [description] Event description
             * @property {string|null} [slug] Event slug
             * @property {proto.IEventLogo|null} [event_logo] Event event_logo
             * @property {number|null} [start_time] Event start_time
             * @property {string|null} [time_zone] Event time_zone
             * @property {number|null} [end_time] Event end_time
             * @property {string|null} [live_stream_url] Event live_stream_url
             * @property {Array.<proto.IGame>|null} [games] Event games
             * @property {Array.<proto.IGameVideo>|null} [videos] Event videos
             * @property {Array.<proto.IEventNetwork>|null} [event_networks] Event event_networks
             * @property {number|null} [created_at] Event created_at
             * @property {number|null} [updated_at] Event updated_at
             * @property {string|null} [checksum] Event checksum
             */
    
            /**
             * Constructs a new Event.
             * @memberof proto
             * @classdesc Represents an Event.
             * @implements IEvent
             * @constructor
             * @param {proto.IEvent=} [properties] Properties to set
             */
            function Event(properties) {
                this.games = [];
                this.videos = [];
                this.event_networks = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Event id.
             * @member {number} id
             * @memberof proto.Event
             * @instance
             */
            Event.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Event name.
             * @member {string} name
             * @memberof proto.Event
             * @instance
             */
            Event.prototype.name = "";
    
            /**
             * Event description.
             * @member {string} description
             * @memberof proto.Event
             * @instance
             */
            Event.prototype.description = "";
    
            /**
             * Event slug.
             * @member {string} slug
             * @memberof proto.Event
             * @instance
             */
            Event.prototype.slug = "";
    
            /**
             * Event event_logo.
             * @member {proto.IEventLogo|null|undefined} event_logo
             * @memberof proto.Event
             * @instance
             */
            Event.prototype.event_logo = null;
    
            /**
             * Event start_time.
             * @member {number|null|undefined} start_time
             * @memberof proto.Event
             * @instance
             */
            Event.prototype.start_time = null;
    
            /**
             * Event time_zone.
             * @member {string} time_zone
             * @memberof proto.Event
             * @instance
             */
            Event.prototype.time_zone = "";
    
            /**
             * Event end_time.
             * @member {number|null|undefined} end_time
             * @memberof proto.Event
             * @instance
             */
            Event.prototype.end_time = null;
    
            /**
             * Event live_stream_url.
             * @member {string} live_stream_url
             * @memberof proto.Event
             * @instance
             */
            Event.prototype.live_stream_url = "";
    
            /**
             * Event games.
             * @member {Array.<proto.IGame>} games
             * @memberof proto.Event
             * @instance
             */
            Event.prototype.games = $util.emptyArray;
    
            /**
             * Event videos.
             * @member {Array.<proto.IGameVideo>} videos
             * @memberof proto.Event
             * @instance
             */
            Event.prototype.videos = $util.emptyArray;
    
            /**
             * Event event_networks.
             * @member {Array.<proto.IEventNetwork>} event_networks
             * @memberof proto.Event
             * @instance
             */
            Event.prototype.event_networks = $util.emptyArray;
    
            /**
             * Event created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.Event
             * @instance
             */
            Event.prototype.created_at = null;
    
            /**
             * Event updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.Event
             * @instance
             */
            Event.prototype.updated_at = null;
    
            /**
             * Event checksum.
             * @member {string} checksum
             * @memberof proto.Event
             * @instance
             */
            Event.prototype.checksum = "";
    
            /**
             * Gets the default type url for Event
             * @function getTypeUrl
             * @memberof proto.Event
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Event.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Event";
            };
    
            return Event;
        })();
    
        proto.EventLogoResult = (function() {
    
            /**
             * Properties of an EventLogoResult.
             * @memberof proto
             * @interface IEventLogoResult
             * @property {Array.<proto.IEventLogo>|null} [eventlogos] EventLogoResult eventlogos
             */
    
            /**
             * Constructs a new EventLogoResult.
             * @memberof proto
             * @classdesc Represents an EventLogoResult.
             * @implements IEventLogoResult
             * @constructor
             * @param {proto.IEventLogoResult=} [properties] Properties to set
             */
            function EventLogoResult(properties) {
                this.eventlogos = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * EventLogoResult eventlogos.
             * @member {Array.<proto.IEventLogo>} eventlogos
             * @memberof proto.EventLogoResult
             * @instance
             */
            EventLogoResult.prototype.eventlogos = $util.emptyArray;
    
            /**
             * Gets the default type url for EventLogoResult
             * @function getTypeUrl
             * @memberof proto.EventLogoResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EventLogoResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.EventLogoResult";
            };
    
            return EventLogoResult;
        })();
    
        proto.EventLogo = (function() {
    
            /**
             * Properties of an EventLogo.
             * @memberof proto
             * @interface IEventLogo
             * @property {number|null} [id] EventLogo id
             * @property {proto.IEvent|null} [event] EventLogo event
             * @property {boolean|null} [alpha_channel] EventLogo alpha_channel
             * @property {boolean|null} [animated] EventLogo animated
             * @property {number|null} [height] EventLogo height
             * @property {string|null} [image_id] EventLogo image_id
             * @property {string|null} [url] EventLogo url
             * @property {number|null} [width] EventLogo width
             * @property {number|null} [created_at] EventLogo created_at
             * @property {number|null} [updated_at] EventLogo updated_at
             * @property {string|null} [checksum] EventLogo checksum
             */
    
            /**
             * Constructs a new EventLogo.
             * @memberof proto
             * @classdesc Represents an EventLogo.
             * @implements IEventLogo
             * @constructor
             * @param {proto.IEventLogo=} [properties] Properties to set
             */
            function EventLogo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * EventLogo id.
             * @member {number} id
             * @memberof proto.EventLogo
             * @instance
             */
            EventLogo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * EventLogo event.
             * @member {proto.IEvent|null|undefined} event
             * @memberof proto.EventLogo
             * @instance
             */
            EventLogo.prototype.event = null;
    
            /**
             * EventLogo alpha_channel.
             * @member {boolean} alpha_channel
             * @memberof proto.EventLogo
             * @instance
             */
            EventLogo.prototype.alpha_channel = false;
    
            /**
             * EventLogo animated.
             * @member {boolean} animated
             * @memberof proto.EventLogo
             * @instance
             */
            EventLogo.prototype.animated = false;
    
            /**
             * EventLogo height.
             * @member {number} height
             * @memberof proto.EventLogo
             * @instance
             */
            EventLogo.prototype.height = 0;
    
            /**
             * EventLogo image_id.
             * @member {string} image_id
             * @memberof proto.EventLogo
             * @instance
             */
            EventLogo.prototype.image_id = "";
    
            /**
             * EventLogo url.
             * @member {string} url
             * @memberof proto.EventLogo
             * @instance
             */
            EventLogo.prototype.url = "";
    
            /**
             * EventLogo width.
             * @member {number} width
             * @memberof proto.EventLogo
             * @instance
             */
            EventLogo.prototype.width = 0;
    
            /**
             * EventLogo created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.EventLogo
             * @instance
             */
            EventLogo.prototype.created_at = null;
    
            /**
             * EventLogo updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.EventLogo
             * @instance
             */
            EventLogo.prototype.updated_at = null;
    
            /**
             * EventLogo checksum.
             * @member {string} checksum
             * @memberof proto.EventLogo
             * @instance
             */
            EventLogo.prototype.checksum = "";
    
            /**
             * Gets the default type url for EventLogo
             * @function getTypeUrl
             * @memberof proto.EventLogo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EventLogo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.EventLogo";
            };
    
            return EventLogo;
        })();
    
        proto.EventNetworkResult = (function() {
    
            /**
             * Properties of an EventNetworkResult.
             * @memberof proto
             * @interface IEventNetworkResult
             * @property {Array.<proto.IEventNetwork>|null} [eventnetworks] EventNetworkResult eventnetworks
             */
    
            /**
             * Constructs a new EventNetworkResult.
             * @memberof proto
             * @classdesc Represents an EventNetworkResult.
             * @implements IEventNetworkResult
             * @constructor
             * @param {proto.IEventNetworkResult=} [properties] Properties to set
             */
            function EventNetworkResult(properties) {
                this.eventnetworks = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * EventNetworkResult eventnetworks.
             * @member {Array.<proto.IEventNetwork>} eventnetworks
             * @memberof proto.EventNetworkResult
             * @instance
             */
            EventNetworkResult.prototype.eventnetworks = $util.emptyArray;
    
            /**
             * Gets the default type url for EventNetworkResult
             * @function getTypeUrl
             * @memberof proto.EventNetworkResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EventNetworkResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.EventNetworkResult";
            };
    
            return EventNetworkResult;
        })();
    
        proto.EventNetwork = (function() {
    
            /**
             * Properties of an EventNetwork.
             * @memberof proto
             * @interface IEventNetwork
             * @property {number|null} [id] EventNetwork id
             * @property {proto.IEvent|null} [event] EventNetwork event
             * @property {string|null} [url] EventNetwork url
             * @property {proto.INetworkType|null} [network_type] EventNetwork network_type
             * @property {number|null} [created_at] EventNetwork created_at
             * @property {number|null} [updated_at] EventNetwork updated_at
             * @property {string|null} [checksum] EventNetwork checksum
             */
    
            /**
             * Constructs a new EventNetwork.
             * @memberof proto
             * @classdesc Represents an EventNetwork.
             * @implements IEventNetwork
             * @constructor
             * @param {proto.IEventNetwork=} [properties] Properties to set
             */
            function EventNetwork(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * EventNetwork id.
             * @member {number} id
             * @memberof proto.EventNetwork
             * @instance
             */
            EventNetwork.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * EventNetwork event.
             * @member {proto.IEvent|null|undefined} event
             * @memberof proto.EventNetwork
             * @instance
             */
            EventNetwork.prototype.event = null;
    
            /**
             * EventNetwork url.
             * @member {string} url
             * @memberof proto.EventNetwork
             * @instance
             */
            EventNetwork.prototype.url = "";
    
            /**
             * EventNetwork network_type.
             * @member {proto.INetworkType|null|undefined} network_type
             * @memberof proto.EventNetwork
             * @instance
             */
            EventNetwork.prototype.network_type = null;
    
            /**
             * EventNetwork created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.EventNetwork
             * @instance
             */
            EventNetwork.prototype.created_at = null;
    
            /**
             * EventNetwork updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.EventNetwork
             * @instance
             */
            EventNetwork.prototype.updated_at = null;
    
            /**
             * EventNetwork checksum.
             * @member {string} checksum
             * @memberof proto.EventNetwork
             * @instance
             */
            EventNetwork.prototype.checksum = "";
    
            /**
             * Gets the default type url for EventNetwork
             * @function getTypeUrl
             * @memberof proto.EventNetwork
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            EventNetwork.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.EventNetwork";
            };
    
            return EventNetwork;
        })();
    
        proto.ExternalGameResult = (function() {
    
            /**
             * Properties of an ExternalGameResult.
             * @memberof proto
             * @interface IExternalGameResult
             * @property {Array.<proto.IExternalGame>|null} [externalgames] ExternalGameResult externalgames
             */
    
            /**
             * Constructs a new ExternalGameResult.
             * @memberof proto
             * @classdesc Represents an ExternalGameResult.
             * @implements IExternalGameResult
             * @constructor
             * @param {proto.IExternalGameResult=} [properties] Properties to set
             */
            function ExternalGameResult(properties) {
                this.externalgames = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ExternalGameResult externalgames.
             * @member {Array.<proto.IExternalGame>} externalgames
             * @memberof proto.ExternalGameResult
             * @instance
             */
            ExternalGameResult.prototype.externalgames = $util.emptyArray;
    
            /**
             * Gets the default type url for ExternalGameResult
             * @function getTypeUrl
             * @memberof proto.ExternalGameResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ExternalGameResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ExternalGameResult";
            };
    
            return ExternalGameResult;
        })();
    
        proto.ExternalGame = (function() {
    
            /**
             * Properties of an ExternalGame.
             * @memberof proto
             * @interface IExternalGame
             * @property {number|null} [id] ExternalGame id
             * @property {proto.ExternalGameCategoryEnum|null} [category] ExternalGame category
             * @property {number|null} [created_at] ExternalGame created_at
             * @property {proto.IGame|null} [game] ExternalGame game
             * @property {string|null} [name] ExternalGame name
             * @property {string|null} [uid] ExternalGame uid
             * @property {number|null} [updated_at] ExternalGame updated_at
             * @property {string|null} [url] ExternalGame url
             * @property {number|null} [year] ExternalGame year
             * @property {proto.ExternalGameMediaEnum|null} [media] ExternalGame media
             * @property {proto.IPlatform|null} [platform] ExternalGame platform
             * @property {Array.<number>|null} [countries] ExternalGame countries
             * @property {string|null} [checksum] ExternalGame checksum
             * @property {proto.IExternalGameSource|null} [external_game_source] ExternalGame external_game_source
             * @property {proto.IGameReleaseFormat|null} [game_release_format] ExternalGame game_release_format
             */
    
            /**
             * Constructs a new ExternalGame.
             * @memberof proto
             * @classdesc Represents an ExternalGame.
             * @implements IExternalGame
             * @constructor
             * @param {proto.IExternalGame=} [properties] Properties to set
             */
            function ExternalGame(properties) {
                this.countries = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ExternalGame id.
             * @member {number} id
             * @memberof proto.ExternalGame
             * @instance
             */
            ExternalGame.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * ExternalGame category.
             * @member {proto.ExternalGameCategoryEnum} category
             * @memberof proto.ExternalGame
             * @instance
             */
            ExternalGame.prototype.category = 0;
    
            /**
             * ExternalGame created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.ExternalGame
             * @instance
             */
            ExternalGame.prototype.created_at = null;
    
            /**
             * ExternalGame game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.ExternalGame
             * @instance
             */
            ExternalGame.prototype.game = null;
    
            /**
             * ExternalGame name.
             * @member {string} name
             * @memberof proto.ExternalGame
             * @instance
             */
            ExternalGame.prototype.name = "";
    
            /**
             * ExternalGame uid.
             * @member {string} uid
             * @memberof proto.ExternalGame
             * @instance
             */
            ExternalGame.prototype.uid = "";
    
            /**
             * ExternalGame updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.ExternalGame
             * @instance
             */
            ExternalGame.prototype.updated_at = null;
    
            /**
             * ExternalGame url.
             * @member {string} url
             * @memberof proto.ExternalGame
             * @instance
             */
            ExternalGame.prototype.url = "";
    
            /**
             * ExternalGame year.
             * @member {number} year
             * @memberof proto.ExternalGame
             * @instance
             */
            ExternalGame.prototype.year = 0;
    
            /**
             * ExternalGame media.
             * @member {proto.ExternalGameMediaEnum} media
             * @memberof proto.ExternalGame
             * @instance
             */
            ExternalGame.prototype.media = 0;
    
            /**
             * ExternalGame platform.
             * @member {proto.IPlatform|null|undefined} platform
             * @memberof proto.ExternalGame
             * @instance
             */
            ExternalGame.prototype.platform = null;
    
            /**
             * ExternalGame countries.
             * @member {Array.<number>} countries
             * @memberof proto.ExternalGame
             * @instance
             */
            ExternalGame.prototype.countries = $util.emptyArray;
    
            /**
             * ExternalGame checksum.
             * @member {string} checksum
             * @memberof proto.ExternalGame
             * @instance
             */
            ExternalGame.prototype.checksum = "";
    
            /**
             * ExternalGame external_game_source.
             * @member {proto.IExternalGameSource|null|undefined} external_game_source
             * @memberof proto.ExternalGame
             * @instance
             */
            ExternalGame.prototype.external_game_source = null;
    
            /**
             * ExternalGame game_release_format.
             * @member {proto.IGameReleaseFormat|null|undefined} game_release_format
             * @memberof proto.ExternalGame
             * @instance
             */
            ExternalGame.prototype.game_release_format = null;
    
            /**
             * Gets the default type url for ExternalGame
             * @function getTypeUrl
             * @memberof proto.ExternalGame
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ExternalGame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ExternalGame";
            };
    
            return ExternalGame;
        })();
    
        /**
         * ExternalGameCategoryEnum enum.
         * @name proto.ExternalGameCategoryEnum
         * @enum {number}
         * @property {number} EXTERNALGAME_CATEGORY_NULL=0 EXTERNALGAME_CATEGORY_NULL value
         * @property {number} EXTERNALGAME_STEAM=1 EXTERNALGAME_STEAM value
         * @property {number} EXTERNALGAME_GOG=5 EXTERNALGAME_GOG value
         * @property {number} EXTERNALGAME_YOUTUBE=10 EXTERNALGAME_YOUTUBE value
         * @property {number} EXTERNALGAME_MICROSOFT=11 EXTERNALGAME_MICROSOFT value
         * @property {number} EXTERNALGAME_APPLE=13 EXTERNALGAME_APPLE value
         * @property {number} EXTERNALGAME_TWITCH=14 EXTERNALGAME_TWITCH value
         * @property {number} EXTERNALGAME_ANDROID=15 EXTERNALGAME_ANDROID value
         * @property {number} EXTERNALGAME_AMAZON_ASIN=20 EXTERNALGAME_AMAZON_ASIN value
         * @property {number} EXTERNALGAME_AMAZON_LUNA=22 EXTERNALGAME_AMAZON_LUNA value
         * @property {number} EXTERNALGAME_AMAZON_ADG=23 EXTERNALGAME_AMAZON_ADG value
         * @property {number} EXTERNALGAME_EPIC_GAME_STORE=26 EXTERNALGAME_EPIC_GAME_STORE value
         * @property {number} EXTERNALGAME_OCULUS=28 EXTERNALGAME_OCULUS value
         * @property {number} EXTERNALGAME_UTOMIK=29 EXTERNALGAME_UTOMIK value
         * @property {number} EXTERNALGAME_ITCH_IO=30 EXTERNALGAME_ITCH_IO value
         * @property {number} EXTERNALGAME_XBOX_MARKETPLACE=31 EXTERNALGAME_XBOX_MARKETPLACE value
         * @property {number} EXTERNALGAME_KARTRIDGE=32 EXTERNALGAME_KARTRIDGE value
         * @property {number} EXTERNALGAME_PLAYSTATION_STORE_US=36 EXTERNALGAME_PLAYSTATION_STORE_US value
         * @property {number} EXTERNALGAME_FOCUS_ENTERTAINMENT=37 EXTERNALGAME_FOCUS_ENTERTAINMENT value
         * @property {number} EXTERNALGAME_XBOX_GAME_PASS_ULTIMATE_CLOUD=54 EXTERNALGAME_XBOX_GAME_PASS_ULTIMATE_CLOUD value
         * @property {number} EXTERNALGAME_GAMEJOLT=55 EXTERNALGAME_GAMEJOLT value
         */
        proto.ExternalGameCategoryEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EXTERNALGAME_CATEGORY_NULL"] = 0;
            values[valuesById[1] = "EXTERNALGAME_STEAM"] = 1;
            values[valuesById[5] = "EXTERNALGAME_GOG"] = 5;
            values[valuesById[10] = "EXTERNALGAME_YOUTUBE"] = 10;
            values[valuesById[11] = "EXTERNALGAME_MICROSOFT"] = 11;
            values[valuesById[13] = "EXTERNALGAME_APPLE"] = 13;
            values[valuesById[14] = "EXTERNALGAME_TWITCH"] = 14;
            values[valuesById[15] = "EXTERNALGAME_ANDROID"] = 15;
            values[valuesById[20] = "EXTERNALGAME_AMAZON_ASIN"] = 20;
            values[valuesById[22] = "EXTERNALGAME_AMAZON_LUNA"] = 22;
            values[valuesById[23] = "EXTERNALGAME_AMAZON_ADG"] = 23;
            values[valuesById[26] = "EXTERNALGAME_EPIC_GAME_STORE"] = 26;
            values[valuesById[28] = "EXTERNALGAME_OCULUS"] = 28;
            values[valuesById[29] = "EXTERNALGAME_UTOMIK"] = 29;
            values[valuesById[30] = "EXTERNALGAME_ITCH_IO"] = 30;
            values[valuesById[31] = "EXTERNALGAME_XBOX_MARKETPLACE"] = 31;
            values[valuesById[32] = "EXTERNALGAME_KARTRIDGE"] = 32;
            values[valuesById[36] = "EXTERNALGAME_PLAYSTATION_STORE_US"] = 36;
            values[valuesById[37] = "EXTERNALGAME_FOCUS_ENTERTAINMENT"] = 37;
            values[valuesById[54] = "EXTERNALGAME_XBOX_GAME_PASS_ULTIMATE_CLOUD"] = 54;
            values[valuesById[55] = "EXTERNALGAME_GAMEJOLT"] = 55;
            return values;
        })();
    
        /**
         * ExternalGameMediaEnum enum.
         * @name proto.ExternalGameMediaEnum
         * @enum {number}
         * @property {number} EXTERNALGAME_MEDIA_NULL=0 EXTERNALGAME_MEDIA_NULL value
         * @property {number} EXTERNALGAME_DIGITAL=1 EXTERNALGAME_DIGITAL value
         * @property {number} EXTERNALGAME_PHYSICAL=2 EXTERNALGAME_PHYSICAL value
         */
        proto.ExternalGameMediaEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "EXTERNALGAME_MEDIA_NULL"] = 0;
            values[valuesById[1] = "EXTERNALGAME_DIGITAL"] = 1;
            values[valuesById[2] = "EXTERNALGAME_PHYSICAL"] = 2;
            return values;
        })();
    
        proto.ExternalGameSourceResult = (function() {
    
            /**
             * Properties of an ExternalGameSourceResult.
             * @memberof proto
             * @interface IExternalGameSourceResult
             * @property {Array.<proto.IExternalGameSource>|null} [externalgamesources] ExternalGameSourceResult externalgamesources
             */
    
            /**
             * Constructs a new ExternalGameSourceResult.
             * @memberof proto
             * @classdesc Represents an ExternalGameSourceResult.
             * @implements IExternalGameSourceResult
             * @constructor
             * @param {proto.IExternalGameSourceResult=} [properties] Properties to set
             */
            function ExternalGameSourceResult(properties) {
                this.externalgamesources = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ExternalGameSourceResult externalgamesources.
             * @member {Array.<proto.IExternalGameSource>} externalgamesources
             * @memberof proto.ExternalGameSourceResult
             * @instance
             */
            ExternalGameSourceResult.prototype.externalgamesources = $util.emptyArray;
    
            /**
             * Gets the default type url for ExternalGameSourceResult
             * @function getTypeUrl
             * @memberof proto.ExternalGameSourceResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ExternalGameSourceResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ExternalGameSourceResult";
            };
    
            return ExternalGameSourceResult;
        })();
    
        proto.ExternalGameSource = (function() {
    
            /**
             * Properties of an ExternalGameSource.
             * @memberof proto
             * @interface IExternalGameSource
             * @property {number|null} [id] ExternalGameSource id
             * @property {string|null} [name] ExternalGameSource name
             * @property {number|null} [created_at] ExternalGameSource created_at
             * @property {number|null} [updated_at] ExternalGameSource updated_at
             * @property {string|null} [checksum] ExternalGameSource checksum
             */
    
            /**
             * Constructs a new ExternalGameSource.
             * @memberof proto
             * @classdesc Represents an ExternalGameSource.
             * @implements IExternalGameSource
             * @constructor
             * @param {proto.IExternalGameSource=} [properties] Properties to set
             */
            function ExternalGameSource(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ExternalGameSource id.
             * @member {number} id
             * @memberof proto.ExternalGameSource
             * @instance
             */
            ExternalGameSource.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * ExternalGameSource name.
             * @member {string} name
             * @memberof proto.ExternalGameSource
             * @instance
             */
            ExternalGameSource.prototype.name = "";
    
            /**
             * ExternalGameSource created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.ExternalGameSource
             * @instance
             */
            ExternalGameSource.prototype.created_at = null;
    
            /**
             * ExternalGameSource updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.ExternalGameSource
             * @instance
             */
            ExternalGameSource.prototype.updated_at = null;
    
            /**
             * ExternalGameSource checksum.
             * @member {string} checksum
             * @memberof proto.ExternalGameSource
             * @instance
             */
            ExternalGameSource.prototype.checksum = "";
    
            /**
             * Gets the default type url for ExternalGameSource
             * @function getTypeUrl
             * @memberof proto.ExternalGameSource
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ExternalGameSource.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ExternalGameSource";
            };
    
            return ExternalGameSource;
        })();
    
        proto.FranchiseResult = (function() {
    
            /**
             * Properties of a FranchiseResult.
             * @memberof proto
             * @interface IFranchiseResult
             * @property {Array.<proto.IFranchise>|null} [franchises] FranchiseResult franchises
             */
    
            /**
             * Constructs a new FranchiseResult.
             * @memberof proto
             * @classdesc Represents a FranchiseResult.
             * @implements IFranchiseResult
             * @constructor
             * @param {proto.IFranchiseResult=} [properties] Properties to set
             */
            function FranchiseResult(properties) {
                this.franchises = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * FranchiseResult franchises.
             * @member {Array.<proto.IFranchise>} franchises
             * @memberof proto.FranchiseResult
             * @instance
             */
            FranchiseResult.prototype.franchises = $util.emptyArray;
    
            /**
             * Gets the default type url for FranchiseResult
             * @function getTypeUrl
             * @memberof proto.FranchiseResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            FranchiseResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.FranchiseResult";
            };
    
            return FranchiseResult;
        })();
    
        proto.Franchise = (function() {
    
            /**
             * Properties of a Franchise.
             * @memberof proto
             * @interface IFranchise
             * @property {number|null} [id] Franchise id
             * @property {number|null} [created_at] Franchise created_at
             * @property {Array.<proto.IGame>|null} [games] Franchise games
             * @property {string|null} [name] Franchise name
             * @property {string|null} [slug] Franchise slug
             * @property {number|null} [updated_at] Franchise updated_at
             * @property {string|null} [url] Franchise url
             * @property {string|null} [checksum] Franchise checksum
             */
    
            /**
             * Constructs a new Franchise.
             * @memberof proto
             * @classdesc Represents a Franchise.
             * @implements IFranchise
             * @constructor
             * @param {proto.IFranchise=} [properties] Properties to set
             */
            function Franchise(properties) {
                this.games = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Franchise id.
             * @member {number} id
             * @memberof proto.Franchise
             * @instance
             */
            Franchise.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Franchise created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.Franchise
             * @instance
             */
            Franchise.prototype.created_at = null;
    
            /**
             * Franchise games.
             * @member {Array.<proto.IGame>} games
             * @memberof proto.Franchise
             * @instance
             */
            Franchise.prototype.games = $util.emptyArray;
    
            /**
             * Franchise name.
             * @member {string} name
             * @memberof proto.Franchise
             * @instance
             */
            Franchise.prototype.name = "";
    
            /**
             * Franchise slug.
             * @member {string} slug
             * @memberof proto.Franchise
             * @instance
             */
            Franchise.prototype.slug = "";
    
            /**
             * Franchise updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.Franchise
             * @instance
             */
            Franchise.prototype.updated_at = null;
    
            /**
             * Franchise url.
             * @member {string} url
             * @memberof proto.Franchise
             * @instance
             */
            Franchise.prototype.url = "";
    
            /**
             * Franchise checksum.
             * @member {string} checksum
             * @memberof proto.Franchise
             * @instance
             */
            Franchise.prototype.checksum = "";
    
            /**
             * Gets the default type url for Franchise
             * @function getTypeUrl
             * @memberof proto.Franchise
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Franchise.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Franchise";
            };
    
            return Franchise;
        })();
    
        proto.GameResult = (function() {
    
            /**
             * Properties of a GameResult.
             * @memberof proto
             * @interface IGameResult
             * @property {Array.<proto.IGame>|null} [games] GameResult games
             */
    
            /**
             * Constructs a new GameResult.
             * @memberof proto
             * @classdesc Represents a GameResult.
             * @implements IGameResult
             * @constructor
             * @param {proto.IGameResult=} [properties] Properties to set
             */
            function GameResult(properties) {
                this.games = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameResult games.
             * @member {Array.<proto.IGame>} games
             * @memberof proto.GameResult
             * @instance
             */
            GameResult.prototype.games = $util.emptyArray;
    
            /**
             * Gets the default type url for GameResult
             * @function getTypeUrl
             * @memberof proto.GameResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameResult";
            };
    
            return GameResult;
        })();
    
        proto.Game = (function() {
    
            /**
             * Properties of a Game.
             * @memberof proto
             * @interface IGame
             * @property {number|null} [id] Game id
             * @property {Array.<proto.IAgeRating>|null} [age_ratings] Game age_ratings
             * @property {number|null} [aggregated_rating] Game aggregated_rating
             * @property {number|null} [aggregated_rating_count] Game aggregated_rating_count
             * @property {Array.<proto.IAlternativeName>|null} [alternative_names] Game alternative_names
             * @property {Array.<proto.IArtwork>|null} [artworks] Game artworks
             * @property {Array.<proto.IGame>|null} [bundles] Game bundles
             * @property {proto.GameCategoryEnum|null} [category] Game category
             * @property {proto.ICollection|null} [collection] Game collection
             * @property {proto.ICover|null} [cover] Game cover
             * @property {number|null} [created_at] Game created_at
             * @property {Array.<proto.IGame>|null} [dlcs] Game dlcs
             * @property {Array.<proto.IGame>|null} [expansions] Game expansions
             * @property {Array.<proto.IExternalGame>|null} [external_games] Game external_games
             * @property {number|null} [first_release_date] Game first_release_date
             * @property {number|null} [follows] Game follows
             * @property {proto.IFranchise|null} [franchise] Game franchise
             * @property {Array.<proto.IFranchise>|null} [franchises] Game franchises
             * @property {Array.<proto.IGameEngine>|null} [game_engines] Game game_engines
             * @property {Array.<proto.IGameMode>|null} [game_modes] Game game_modes
             * @property {Array.<proto.IGenre>|null} [genres] Game genres
             * @property {number|null} [hypes] Game hypes
             * @property {Array.<proto.IInvolvedCompany>|null} [involved_companies] Game involved_companies
             * @property {Array.<proto.IKeyword>|null} [keywords] Game keywords
             * @property {Array.<proto.IMultiplayerMode>|null} [multiplayer_modes] Game multiplayer_modes
             * @property {string|null} [name] Game name
             * @property {proto.IGame|null} [parent_game] Game parent_game
             * @property {Array.<proto.IPlatform>|null} [platforms] Game platforms
             * @property {Array.<proto.IPlayerPerspective>|null} [player_perspectives] Game player_perspectives
             * @property {number|null} [rating] Game rating
             * @property {number|null} [rating_count] Game rating_count
             * @property {Array.<proto.IReleaseDate>|null} [release_dates] Game release_dates
             * @property {Array.<proto.IScreenshot>|null} [screenshots] Game screenshots
             * @property {Array.<proto.IGame>|null} [similar_games] Game similar_games
             * @property {string|null} [slug] Game slug
             * @property {Array.<proto.IGame>|null} [standalone_expansions] Game standalone_expansions
             * @property {proto.GameStatusEnum|null} [status] Game status
             * @property {string|null} [storyline] Game storyline
             * @property {string|null} [summary] Game summary
             * @property {Array.<number>|null} [tags] Game tags
             * @property {Array.<proto.ITheme>|null} [themes] Game themes
             * @property {number|null} [total_rating] Game total_rating
             * @property {number|null} [total_rating_count] Game total_rating_count
             * @property {number|null} [updated_at] Game updated_at
             * @property {string|null} [url] Game url
             * @property {proto.IGame|null} [version_parent] Game version_parent
             * @property {string|null} [version_title] Game version_title
             * @property {Array.<proto.IGameVideo>|null} [videos] Game videos
             * @property {Array.<proto.IWebsite>|null} [websites] Game websites
             * @property {string|null} [checksum] Game checksum
             * @property {Array.<proto.IGame>|null} [remakes] Game remakes
             * @property {Array.<proto.IGame>|null} [remasters] Game remasters
             * @property {Array.<proto.IGame>|null} [expanded_games] Game expanded_games
             * @property {Array.<proto.IGame>|null} [ports] Game ports
             * @property {Array.<proto.IGame>|null} [forks] Game forks
             * @property {Array.<proto.ILanguageSupport>|null} [language_supports] Game language_supports
             * @property {Array.<proto.IGameLocalization>|null} [game_localizations] Game game_localizations
             * @property {Array.<proto.ICollection>|null} [collections] Game collections
             * @property {proto.IGameStatus|null} [game_status] Game game_status
             * @property {proto.IGameType|null} [game_type] Game game_type
             */
    
            /**
             * Constructs a new Game.
             * @memberof proto
             * @classdesc Represents a Game.
             * @implements IGame
             * @constructor
             * @param {proto.IGame=} [properties] Properties to set
             */
            function Game(properties) {
                this.age_ratings = [];
                this.alternative_names = [];
                this.artworks = [];
                this.bundles = [];
                this.dlcs = [];
                this.expansions = [];
                this.external_games = [];
                this.franchises = [];
                this.game_engines = [];
                this.game_modes = [];
                this.genres = [];
                this.involved_companies = [];
                this.keywords = [];
                this.multiplayer_modes = [];
                this.platforms = [];
                this.player_perspectives = [];
                this.release_dates = [];
                this.screenshots = [];
                this.similar_games = [];
                this.standalone_expansions = [];
                this.tags = [];
                this.themes = [];
                this.videos = [];
                this.websites = [];
                this.remakes = [];
                this.remasters = [];
                this.expanded_games = [];
                this.ports = [];
                this.forks = [];
                this.language_supports = [];
                this.game_localizations = [];
                this.collections = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Game id.
             * @member {number} id
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Game age_ratings.
             * @member {Array.<proto.IAgeRating>} age_ratings
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.age_ratings = $util.emptyArray;
    
            /**
             * Game aggregated_rating.
             * @member {number} aggregated_rating
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.aggregated_rating = 0;
    
            /**
             * Game aggregated_rating_count.
             * @member {number} aggregated_rating_count
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.aggregated_rating_count = 0;
    
            /**
             * Game alternative_names.
             * @member {Array.<proto.IAlternativeName>} alternative_names
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.alternative_names = $util.emptyArray;
    
            /**
             * Game artworks.
             * @member {Array.<proto.IArtwork>} artworks
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.artworks = $util.emptyArray;
    
            /**
             * Game bundles.
             * @member {Array.<proto.IGame>} bundles
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.bundles = $util.emptyArray;
    
            /**
             * Game category.
             * @member {proto.GameCategoryEnum} category
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.category = 0;
    
            /**
             * Game collection.
             * @member {proto.ICollection|null|undefined} collection
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.collection = null;
    
            /**
             * Game cover.
             * @member {proto.ICover|null|undefined} cover
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.cover = null;
    
            /**
             * Game created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.created_at = null;
    
            /**
             * Game dlcs.
             * @member {Array.<proto.IGame>} dlcs
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.dlcs = $util.emptyArray;
    
            /**
             * Game expansions.
             * @member {Array.<proto.IGame>} expansions
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.expansions = $util.emptyArray;
    
            /**
             * Game external_games.
             * @member {Array.<proto.IExternalGame>} external_games
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.external_games = $util.emptyArray;
    
            /**
             * Game first_release_date.
             * @member {number|null|undefined} first_release_date
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.first_release_date = null;
    
            /**
             * Game follows.
             * @member {number} follows
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.follows = 0;
    
            /**
             * Game franchise.
             * @member {proto.IFranchise|null|undefined} franchise
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.franchise = null;
    
            /**
             * Game franchises.
             * @member {Array.<proto.IFranchise>} franchises
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.franchises = $util.emptyArray;
    
            /**
             * Game game_engines.
             * @member {Array.<proto.IGameEngine>} game_engines
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.game_engines = $util.emptyArray;
    
            /**
             * Game game_modes.
             * @member {Array.<proto.IGameMode>} game_modes
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.game_modes = $util.emptyArray;
    
            /**
             * Game genres.
             * @member {Array.<proto.IGenre>} genres
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.genres = $util.emptyArray;
    
            /**
             * Game hypes.
             * @member {number} hypes
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.hypes = 0;
    
            /**
             * Game involved_companies.
             * @member {Array.<proto.IInvolvedCompany>} involved_companies
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.involved_companies = $util.emptyArray;
    
            /**
             * Game keywords.
             * @member {Array.<proto.IKeyword>} keywords
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.keywords = $util.emptyArray;
    
            /**
             * Game multiplayer_modes.
             * @member {Array.<proto.IMultiplayerMode>} multiplayer_modes
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.multiplayer_modes = $util.emptyArray;
    
            /**
             * Game name.
             * @member {string} name
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.name = "";
    
            /**
             * Game parent_game.
             * @member {proto.IGame|null|undefined} parent_game
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.parent_game = null;
    
            /**
             * Game platforms.
             * @member {Array.<proto.IPlatform>} platforms
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.platforms = $util.emptyArray;
    
            /**
             * Game player_perspectives.
             * @member {Array.<proto.IPlayerPerspective>} player_perspectives
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.player_perspectives = $util.emptyArray;
    
            /**
             * Game rating.
             * @member {number} rating
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.rating = 0;
    
            /**
             * Game rating_count.
             * @member {number} rating_count
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.rating_count = 0;
    
            /**
             * Game release_dates.
             * @member {Array.<proto.IReleaseDate>} release_dates
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.release_dates = $util.emptyArray;
    
            /**
             * Game screenshots.
             * @member {Array.<proto.IScreenshot>} screenshots
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.screenshots = $util.emptyArray;
    
            /**
             * Game similar_games.
             * @member {Array.<proto.IGame>} similar_games
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.similar_games = $util.emptyArray;
    
            /**
             * Game slug.
             * @member {string} slug
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.slug = "";
    
            /**
             * Game standalone_expansions.
             * @member {Array.<proto.IGame>} standalone_expansions
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.standalone_expansions = $util.emptyArray;
    
            /**
             * Game status.
             * @member {proto.GameStatusEnum} status
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.status = 0;
    
            /**
             * Game storyline.
             * @member {string} storyline
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.storyline = "";
    
            /**
             * Game summary.
             * @member {string} summary
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.summary = "";
    
            /**
             * Game tags.
             * @member {Array.<number>} tags
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.tags = $util.emptyArray;
    
            /**
             * Game themes.
             * @member {Array.<proto.ITheme>} themes
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.themes = $util.emptyArray;
    
            /**
             * Game total_rating.
             * @member {number} total_rating
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.total_rating = 0;
    
            /**
             * Game total_rating_count.
             * @member {number} total_rating_count
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.total_rating_count = 0;
    
            /**
             * Game updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.updated_at = null;
    
            /**
             * Game url.
             * @member {string} url
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.url = "";
    
            /**
             * Game version_parent.
             * @member {proto.IGame|null|undefined} version_parent
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.version_parent = null;
    
            /**
             * Game version_title.
             * @member {string} version_title
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.version_title = "";
    
            /**
             * Game videos.
             * @member {Array.<proto.IGameVideo>} videos
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.videos = $util.emptyArray;
    
            /**
             * Game websites.
             * @member {Array.<proto.IWebsite>} websites
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.websites = $util.emptyArray;
    
            /**
             * Game checksum.
             * @member {string} checksum
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.checksum = "";
    
            /**
             * Game remakes.
             * @member {Array.<proto.IGame>} remakes
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.remakes = $util.emptyArray;
    
            /**
             * Game remasters.
             * @member {Array.<proto.IGame>} remasters
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.remasters = $util.emptyArray;
    
            /**
             * Game expanded_games.
             * @member {Array.<proto.IGame>} expanded_games
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.expanded_games = $util.emptyArray;
    
            /**
             * Game ports.
             * @member {Array.<proto.IGame>} ports
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.ports = $util.emptyArray;
    
            /**
             * Game forks.
             * @member {Array.<proto.IGame>} forks
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.forks = $util.emptyArray;
    
            /**
             * Game language_supports.
             * @member {Array.<proto.ILanguageSupport>} language_supports
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.language_supports = $util.emptyArray;
    
            /**
             * Game game_localizations.
             * @member {Array.<proto.IGameLocalization>} game_localizations
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.game_localizations = $util.emptyArray;
    
            /**
             * Game collections.
             * @member {Array.<proto.ICollection>} collections
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.collections = $util.emptyArray;
    
            /**
             * Game game_status.
             * @member {proto.IGameStatus|null|undefined} game_status
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.game_status = null;
    
            /**
             * Game game_type.
             * @member {proto.IGameType|null|undefined} game_type
             * @memberof proto.Game
             * @instance
             */
            Game.prototype.game_type = null;
    
            /**
             * Gets the default type url for Game
             * @function getTypeUrl
             * @memberof proto.Game
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Game.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Game";
            };
    
            return Game;
        })();
    
        /**
         * GameCategoryEnum enum.
         * @name proto.GameCategoryEnum
         * @enum {number}
         * @property {number} MAIN_GAME=0 MAIN_GAME value
         * @property {number} DLC_ADDON=1 DLC_ADDON value
         * @property {number} EXPANSION=2 EXPANSION value
         * @property {number} BUNDLE=3 BUNDLE value
         * @property {number} STANDALONE_EXPANSION=4 STANDALONE_EXPANSION value
         * @property {number} MOD=5 MOD value
         * @property {number} EPISODE=6 EPISODE value
         * @property {number} SEASON=7 SEASON value
         * @property {number} REMAKE=8 REMAKE value
         * @property {number} REMASTER=9 REMASTER value
         * @property {number} EXPANDED_GAME=10 EXPANDED_GAME value
         * @property {number} PORT=11 PORT value
         * @property {number} FORK=12 FORK value
         * @property {number} PACK=13 PACK value
         * @property {number} UPDATE=14 UPDATE value
         */
        proto.GameCategoryEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "MAIN_GAME"] = 0;
            values[valuesById[1] = "DLC_ADDON"] = 1;
            values[valuesById[2] = "EXPANSION"] = 2;
            values[valuesById[3] = "BUNDLE"] = 3;
            values[valuesById[4] = "STANDALONE_EXPANSION"] = 4;
            values[valuesById[5] = "MOD"] = 5;
            values[valuesById[6] = "EPISODE"] = 6;
            values[valuesById[7] = "SEASON"] = 7;
            values[valuesById[8] = "REMAKE"] = 8;
            values[valuesById[9] = "REMASTER"] = 9;
            values[valuesById[10] = "EXPANDED_GAME"] = 10;
            values[valuesById[11] = "PORT"] = 11;
            values[valuesById[12] = "FORK"] = 12;
            values[valuesById[13] = "PACK"] = 13;
            values[valuesById[14] = "UPDATE"] = 14;
            return values;
        })();
    
        /**
         * GameStatusEnum enum.
         * @name proto.GameStatusEnum
         * @enum {number}
         * @property {number} RELEASED=0 RELEASED value
         * @property {number} ALPHA=2 ALPHA value
         * @property {number} BETA=3 BETA value
         * @property {number} EARLY_ACCESS=4 EARLY_ACCESS value
         * @property {number} OFFLINE=5 OFFLINE value
         * @property {number} CANCELLED=6 CANCELLED value
         * @property {number} RUMORED=7 RUMORED value
         * @property {number} DELISTED=8 DELISTED value
         */
        proto.GameStatusEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "RELEASED"] = 0;
            values[valuesById[2] = "ALPHA"] = 2;
            values[valuesById[3] = "BETA"] = 3;
            values[valuesById[4] = "EARLY_ACCESS"] = 4;
            values[valuesById[5] = "OFFLINE"] = 5;
            values[valuesById[6] = "CANCELLED"] = 6;
            values[valuesById[7] = "RUMORED"] = 7;
            values[valuesById[8] = "DELISTED"] = 8;
            return values;
        })();
    
        proto.GameEngineResult = (function() {
    
            /**
             * Properties of a GameEngineResult.
             * @memberof proto
             * @interface IGameEngineResult
             * @property {Array.<proto.IGameEngine>|null} [gameengines] GameEngineResult gameengines
             */
    
            /**
             * Constructs a new GameEngineResult.
             * @memberof proto
             * @classdesc Represents a GameEngineResult.
             * @implements IGameEngineResult
             * @constructor
             * @param {proto.IGameEngineResult=} [properties] Properties to set
             */
            function GameEngineResult(properties) {
                this.gameengines = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameEngineResult gameengines.
             * @member {Array.<proto.IGameEngine>} gameengines
             * @memberof proto.GameEngineResult
             * @instance
             */
            GameEngineResult.prototype.gameengines = $util.emptyArray;
    
            /**
             * Gets the default type url for GameEngineResult
             * @function getTypeUrl
             * @memberof proto.GameEngineResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameEngineResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameEngineResult";
            };
    
            return GameEngineResult;
        })();
    
        proto.GameEngine = (function() {
    
            /**
             * Properties of a GameEngine.
             * @memberof proto
             * @interface IGameEngine
             * @property {number|null} [id] GameEngine id
             * @property {Array.<proto.ICompany>|null} [companies] GameEngine companies
             * @property {number|null} [created_at] GameEngine created_at
             * @property {string|null} [description] GameEngine description
             * @property {proto.IGameEngineLogo|null} [logo] GameEngine logo
             * @property {string|null} [name] GameEngine name
             * @property {Array.<proto.IPlatform>|null} [platforms] GameEngine platforms
             * @property {string|null} [slug] GameEngine slug
             * @property {number|null} [updated_at] GameEngine updated_at
             * @property {string|null} [url] GameEngine url
             * @property {string|null} [checksum] GameEngine checksum
             */
    
            /**
             * Constructs a new GameEngine.
             * @memberof proto
             * @classdesc Represents a GameEngine.
             * @implements IGameEngine
             * @constructor
             * @param {proto.IGameEngine=} [properties] Properties to set
             */
            function GameEngine(properties) {
                this.companies = [];
                this.platforms = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameEngine id.
             * @member {number} id
             * @memberof proto.GameEngine
             * @instance
             */
            GameEngine.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GameEngine companies.
             * @member {Array.<proto.ICompany>} companies
             * @memberof proto.GameEngine
             * @instance
             */
            GameEngine.prototype.companies = $util.emptyArray;
    
            /**
             * GameEngine created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.GameEngine
             * @instance
             */
            GameEngine.prototype.created_at = null;
    
            /**
             * GameEngine description.
             * @member {string} description
             * @memberof proto.GameEngine
             * @instance
             */
            GameEngine.prototype.description = "";
    
            /**
             * GameEngine logo.
             * @member {proto.IGameEngineLogo|null|undefined} logo
             * @memberof proto.GameEngine
             * @instance
             */
            GameEngine.prototype.logo = null;
    
            /**
             * GameEngine name.
             * @member {string} name
             * @memberof proto.GameEngine
             * @instance
             */
            GameEngine.prototype.name = "";
    
            /**
             * GameEngine platforms.
             * @member {Array.<proto.IPlatform>} platforms
             * @memberof proto.GameEngine
             * @instance
             */
            GameEngine.prototype.platforms = $util.emptyArray;
    
            /**
             * GameEngine slug.
             * @member {string} slug
             * @memberof proto.GameEngine
             * @instance
             */
            GameEngine.prototype.slug = "";
    
            /**
             * GameEngine updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.GameEngine
             * @instance
             */
            GameEngine.prototype.updated_at = null;
    
            /**
             * GameEngine url.
             * @member {string} url
             * @memberof proto.GameEngine
             * @instance
             */
            GameEngine.prototype.url = "";
    
            /**
             * GameEngine checksum.
             * @member {string} checksum
             * @memberof proto.GameEngine
             * @instance
             */
            GameEngine.prototype.checksum = "";
    
            /**
             * Gets the default type url for GameEngine
             * @function getTypeUrl
             * @memberof proto.GameEngine
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameEngine.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameEngine";
            };
    
            return GameEngine;
        })();
    
        proto.GameEngineLogoResult = (function() {
    
            /**
             * Properties of a GameEngineLogoResult.
             * @memberof proto
             * @interface IGameEngineLogoResult
             * @property {Array.<proto.IGameEngineLogo>|null} [gameenginelogos] GameEngineLogoResult gameenginelogos
             */
    
            /**
             * Constructs a new GameEngineLogoResult.
             * @memberof proto
             * @classdesc Represents a GameEngineLogoResult.
             * @implements IGameEngineLogoResult
             * @constructor
             * @param {proto.IGameEngineLogoResult=} [properties] Properties to set
             */
            function GameEngineLogoResult(properties) {
                this.gameenginelogos = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameEngineLogoResult gameenginelogos.
             * @member {Array.<proto.IGameEngineLogo>} gameenginelogos
             * @memberof proto.GameEngineLogoResult
             * @instance
             */
            GameEngineLogoResult.prototype.gameenginelogos = $util.emptyArray;
    
            /**
             * Gets the default type url for GameEngineLogoResult
             * @function getTypeUrl
             * @memberof proto.GameEngineLogoResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameEngineLogoResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameEngineLogoResult";
            };
    
            return GameEngineLogoResult;
        })();
    
        proto.GameEngineLogo = (function() {
    
            /**
             * Properties of a GameEngineLogo.
             * @memberof proto
             * @interface IGameEngineLogo
             * @property {number|null} [id] GameEngineLogo id
             * @property {boolean|null} [alpha_channel] GameEngineLogo alpha_channel
             * @property {boolean|null} [animated] GameEngineLogo animated
             * @property {number|null} [height] GameEngineLogo height
             * @property {string|null} [image_id] GameEngineLogo image_id
             * @property {string|null} [url] GameEngineLogo url
             * @property {number|null} [width] GameEngineLogo width
             * @property {string|null} [checksum] GameEngineLogo checksum
             */
    
            /**
             * Constructs a new GameEngineLogo.
             * @memberof proto
             * @classdesc Represents a GameEngineLogo.
             * @implements IGameEngineLogo
             * @constructor
             * @param {proto.IGameEngineLogo=} [properties] Properties to set
             */
            function GameEngineLogo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameEngineLogo id.
             * @member {number} id
             * @memberof proto.GameEngineLogo
             * @instance
             */
            GameEngineLogo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GameEngineLogo alpha_channel.
             * @member {boolean} alpha_channel
             * @memberof proto.GameEngineLogo
             * @instance
             */
            GameEngineLogo.prototype.alpha_channel = false;
    
            /**
             * GameEngineLogo animated.
             * @member {boolean} animated
             * @memberof proto.GameEngineLogo
             * @instance
             */
            GameEngineLogo.prototype.animated = false;
    
            /**
             * GameEngineLogo height.
             * @member {number} height
             * @memberof proto.GameEngineLogo
             * @instance
             */
            GameEngineLogo.prototype.height = 0;
    
            /**
             * GameEngineLogo image_id.
             * @member {string} image_id
             * @memberof proto.GameEngineLogo
             * @instance
             */
            GameEngineLogo.prototype.image_id = "";
    
            /**
             * GameEngineLogo url.
             * @member {string} url
             * @memberof proto.GameEngineLogo
             * @instance
             */
            GameEngineLogo.prototype.url = "";
    
            /**
             * GameEngineLogo width.
             * @member {number} width
             * @memberof proto.GameEngineLogo
             * @instance
             */
            GameEngineLogo.prototype.width = 0;
    
            /**
             * GameEngineLogo checksum.
             * @member {string} checksum
             * @memberof proto.GameEngineLogo
             * @instance
             */
            GameEngineLogo.prototype.checksum = "";
    
            /**
             * Gets the default type url for GameEngineLogo
             * @function getTypeUrl
             * @memberof proto.GameEngineLogo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameEngineLogo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameEngineLogo";
            };
    
            return GameEngineLogo;
        })();
    
        proto.GameLocalizationResult = (function() {
    
            /**
             * Properties of a GameLocalizationResult.
             * @memberof proto
             * @interface IGameLocalizationResult
             * @property {Array.<proto.IGameLocalization>|null} [gamelocalizations] GameLocalizationResult gamelocalizations
             */
    
            /**
             * Constructs a new GameLocalizationResult.
             * @memberof proto
             * @classdesc Represents a GameLocalizationResult.
             * @implements IGameLocalizationResult
             * @constructor
             * @param {proto.IGameLocalizationResult=} [properties] Properties to set
             */
            function GameLocalizationResult(properties) {
                this.gamelocalizations = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameLocalizationResult gamelocalizations.
             * @member {Array.<proto.IGameLocalization>} gamelocalizations
             * @memberof proto.GameLocalizationResult
             * @instance
             */
            GameLocalizationResult.prototype.gamelocalizations = $util.emptyArray;
    
            /**
             * Gets the default type url for GameLocalizationResult
             * @function getTypeUrl
             * @memberof proto.GameLocalizationResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameLocalizationResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameLocalizationResult";
            };
    
            return GameLocalizationResult;
        })();
    
        proto.GameLocalization = (function() {
    
            /**
             * Properties of a GameLocalization.
             * @memberof proto
             * @interface IGameLocalization
             * @property {number|null} [id] GameLocalization id
             * @property {string|null} [name] GameLocalization name
             * @property {proto.ICover|null} [cover] GameLocalization cover
             * @property {proto.IGame|null} [game] GameLocalization game
             * @property {proto.IRegion|null} [region] GameLocalization region
             * @property {number|null} [created_at] GameLocalization created_at
             * @property {number|null} [updated_at] GameLocalization updated_at
             * @property {string|null} [checksum] GameLocalization checksum
             */
    
            /**
             * Constructs a new GameLocalization.
             * @memberof proto
             * @classdesc Represents a GameLocalization.
             * @implements IGameLocalization
             * @constructor
             * @param {proto.IGameLocalization=} [properties] Properties to set
             */
            function GameLocalization(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameLocalization id.
             * @member {number} id
             * @memberof proto.GameLocalization
             * @instance
             */
            GameLocalization.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GameLocalization name.
             * @member {string} name
             * @memberof proto.GameLocalization
             * @instance
             */
            GameLocalization.prototype.name = "";
    
            /**
             * GameLocalization cover.
             * @member {proto.ICover|null|undefined} cover
             * @memberof proto.GameLocalization
             * @instance
             */
            GameLocalization.prototype.cover = null;
    
            /**
             * GameLocalization game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.GameLocalization
             * @instance
             */
            GameLocalization.prototype.game = null;
    
            /**
             * GameLocalization region.
             * @member {proto.IRegion|null|undefined} region
             * @memberof proto.GameLocalization
             * @instance
             */
            GameLocalization.prototype.region = null;
    
            /**
             * GameLocalization created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.GameLocalization
             * @instance
             */
            GameLocalization.prototype.created_at = null;
    
            /**
             * GameLocalization updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.GameLocalization
             * @instance
             */
            GameLocalization.prototype.updated_at = null;
    
            /**
             * GameLocalization checksum.
             * @member {string} checksum
             * @memberof proto.GameLocalization
             * @instance
             */
            GameLocalization.prototype.checksum = "";
    
            /**
             * Gets the default type url for GameLocalization
             * @function getTypeUrl
             * @memberof proto.GameLocalization
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameLocalization.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameLocalization";
            };
    
            return GameLocalization;
        })();
    
        proto.GameModeResult = (function() {
    
            /**
             * Properties of a GameModeResult.
             * @memberof proto
             * @interface IGameModeResult
             * @property {Array.<proto.IGameMode>|null} [gamemodes] GameModeResult gamemodes
             */
    
            /**
             * Constructs a new GameModeResult.
             * @memberof proto
             * @classdesc Represents a GameModeResult.
             * @implements IGameModeResult
             * @constructor
             * @param {proto.IGameModeResult=} [properties] Properties to set
             */
            function GameModeResult(properties) {
                this.gamemodes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameModeResult gamemodes.
             * @member {Array.<proto.IGameMode>} gamemodes
             * @memberof proto.GameModeResult
             * @instance
             */
            GameModeResult.prototype.gamemodes = $util.emptyArray;
    
            /**
             * Gets the default type url for GameModeResult
             * @function getTypeUrl
             * @memberof proto.GameModeResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameModeResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameModeResult";
            };
    
            return GameModeResult;
        })();
    
        proto.GameMode = (function() {
    
            /**
             * Properties of a GameMode.
             * @memberof proto
             * @interface IGameMode
             * @property {number|null} [id] GameMode id
             * @property {number|null} [created_at] GameMode created_at
             * @property {string|null} [name] GameMode name
             * @property {string|null} [slug] GameMode slug
             * @property {number|null} [updated_at] GameMode updated_at
             * @property {string|null} [url] GameMode url
             * @property {string|null} [checksum] GameMode checksum
             */
    
            /**
             * Constructs a new GameMode.
             * @memberof proto
             * @classdesc Represents a GameMode.
             * @implements IGameMode
             * @constructor
             * @param {proto.IGameMode=} [properties] Properties to set
             */
            function GameMode(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameMode id.
             * @member {number} id
             * @memberof proto.GameMode
             * @instance
             */
            GameMode.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GameMode created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.GameMode
             * @instance
             */
            GameMode.prototype.created_at = null;
    
            /**
             * GameMode name.
             * @member {string} name
             * @memberof proto.GameMode
             * @instance
             */
            GameMode.prototype.name = "";
    
            /**
             * GameMode slug.
             * @member {string} slug
             * @memberof proto.GameMode
             * @instance
             */
            GameMode.prototype.slug = "";
    
            /**
             * GameMode updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.GameMode
             * @instance
             */
            GameMode.prototype.updated_at = null;
    
            /**
             * GameMode url.
             * @member {string} url
             * @memberof proto.GameMode
             * @instance
             */
            GameMode.prototype.url = "";
    
            /**
             * GameMode checksum.
             * @member {string} checksum
             * @memberof proto.GameMode
             * @instance
             */
            GameMode.prototype.checksum = "";
    
            /**
             * Gets the default type url for GameMode
             * @function getTypeUrl
             * @memberof proto.GameMode
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameMode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameMode";
            };
    
            return GameMode;
        })();
    
        proto.GameReleaseFormatResult = (function() {
    
            /**
             * Properties of a GameReleaseFormatResult.
             * @memberof proto
             * @interface IGameReleaseFormatResult
             * @property {Array.<proto.IGameReleaseFormat>|null} [gamereleaseformats] GameReleaseFormatResult gamereleaseformats
             */
    
            /**
             * Constructs a new GameReleaseFormatResult.
             * @memberof proto
             * @classdesc Represents a GameReleaseFormatResult.
             * @implements IGameReleaseFormatResult
             * @constructor
             * @param {proto.IGameReleaseFormatResult=} [properties] Properties to set
             */
            function GameReleaseFormatResult(properties) {
                this.gamereleaseformats = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameReleaseFormatResult gamereleaseformats.
             * @member {Array.<proto.IGameReleaseFormat>} gamereleaseformats
             * @memberof proto.GameReleaseFormatResult
             * @instance
             */
            GameReleaseFormatResult.prototype.gamereleaseformats = $util.emptyArray;
    
            /**
             * Gets the default type url for GameReleaseFormatResult
             * @function getTypeUrl
             * @memberof proto.GameReleaseFormatResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameReleaseFormatResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameReleaseFormatResult";
            };
    
            return GameReleaseFormatResult;
        })();
    
        proto.GameReleaseFormat = (function() {
    
            /**
             * Properties of a GameReleaseFormat.
             * @memberof proto
             * @interface IGameReleaseFormat
             * @property {number|null} [id] GameReleaseFormat id
             * @property {string|null} [format] GameReleaseFormat format
             * @property {number|null} [created_at] GameReleaseFormat created_at
             * @property {number|null} [updated_at] GameReleaseFormat updated_at
             * @property {string|null} [checksum] GameReleaseFormat checksum
             */
    
            /**
             * Constructs a new GameReleaseFormat.
             * @memberof proto
             * @classdesc Represents a GameReleaseFormat.
             * @implements IGameReleaseFormat
             * @constructor
             * @param {proto.IGameReleaseFormat=} [properties] Properties to set
             */
            function GameReleaseFormat(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameReleaseFormat id.
             * @member {number} id
             * @memberof proto.GameReleaseFormat
             * @instance
             */
            GameReleaseFormat.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GameReleaseFormat format.
             * @member {string} format
             * @memberof proto.GameReleaseFormat
             * @instance
             */
            GameReleaseFormat.prototype.format = "";
    
            /**
             * GameReleaseFormat created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.GameReleaseFormat
             * @instance
             */
            GameReleaseFormat.prototype.created_at = null;
    
            /**
             * GameReleaseFormat updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.GameReleaseFormat
             * @instance
             */
            GameReleaseFormat.prototype.updated_at = null;
    
            /**
             * GameReleaseFormat checksum.
             * @member {string} checksum
             * @memberof proto.GameReleaseFormat
             * @instance
             */
            GameReleaseFormat.prototype.checksum = "";
    
            /**
             * Gets the default type url for GameReleaseFormat
             * @function getTypeUrl
             * @memberof proto.GameReleaseFormat
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameReleaseFormat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameReleaseFormat";
            };
    
            return GameReleaseFormat;
        })();
    
        proto.GameStatusResult = (function() {
    
            /**
             * Properties of a GameStatusResult.
             * @memberof proto
             * @interface IGameStatusResult
             * @property {Array.<proto.IGameStatus>|null} [gamestatuses] GameStatusResult gamestatuses
             */
    
            /**
             * Constructs a new GameStatusResult.
             * @memberof proto
             * @classdesc Represents a GameStatusResult.
             * @implements IGameStatusResult
             * @constructor
             * @param {proto.IGameStatusResult=} [properties] Properties to set
             */
            function GameStatusResult(properties) {
                this.gamestatuses = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameStatusResult gamestatuses.
             * @member {Array.<proto.IGameStatus>} gamestatuses
             * @memberof proto.GameStatusResult
             * @instance
             */
            GameStatusResult.prototype.gamestatuses = $util.emptyArray;
    
            /**
             * Gets the default type url for GameStatusResult
             * @function getTypeUrl
             * @memberof proto.GameStatusResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameStatusResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameStatusResult";
            };
    
            return GameStatusResult;
        })();
    
        proto.GameStatus = (function() {
    
            /**
             * Properties of a GameStatus.
             * @memberof proto
             * @interface IGameStatus
             * @property {number|null} [id] GameStatus id
             * @property {string|null} [status] GameStatus status
             * @property {number|null} [created_at] GameStatus created_at
             * @property {number|null} [updated_at] GameStatus updated_at
             * @property {string|null} [checksum] GameStatus checksum
             */
    
            /**
             * Constructs a new GameStatus.
             * @memberof proto
             * @classdesc Represents a GameStatus.
             * @implements IGameStatus
             * @constructor
             * @param {proto.IGameStatus=} [properties] Properties to set
             */
            function GameStatus(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameStatus id.
             * @member {number} id
             * @memberof proto.GameStatus
             * @instance
             */
            GameStatus.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GameStatus status.
             * @member {string} status
             * @memberof proto.GameStatus
             * @instance
             */
            GameStatus.prototype.status = "";
    
            /**
             * GameStatus created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.GameStatus
             * @instance
             */
            GameStatus.prototype.created_at = null;
    
            /**
             * GameStatus updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.GameStatus
             * @instance
             */
            GameStatus.prototype.updated_at = null;
    
            /**
             * GameStatus checksum.
             * @member {string} checksum
             * @memberof proto.GameStatus
             * @instance
             */
            GameStatus.prototype.checksum = "";
    
            /**
             * Gets the default type url for GameStatus
             * @function getTypeUrl
             * @memberof proto.GameStatus
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameStatus";
            };
    
            return GameStatus;
        })();
    
        proto.GameTimeToBeatResult = (function() {
    
            /**
             * Properties of a GameTimeToBeatResult.
             * @memberof proto
             * @interface IGameTimeToBeatResult
             * @property {Array.<proto.IGameTimeToBeat>|null} [gametimetobeats] GameTimeToBeatResult gametimetobeats
             */
    
            /**
             * Constructs a new GameTimeToBeatResult.
             * @memberof proto
             * @classdesc Represents a GameTimeToBeatResult.
             * @implements IGameTimeToBeatResult
             * @constructor
             * @param {proto.IGameTimeToBeatResult=} [properties] Properties to set
             */
            function GameTimeToBeatResult(properties) {
                this.gametimetobeats = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameTimeToBeatResult gametimetobeats.
             * @member {Array.<proto.IGameTimeToBeat>} gametimetobeats
             * @memberof proto.GameTimeToBeatResult
             * @instance
             */
            GameTimeToBeatResult.prototype.gametimetobeats = $util.emptyArray;
    
            /**
             * Gets the default type url for GameTimeToBeatResult
             * @function getTypeUrl
             * @memberof proto.GameTimeToBeatResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameTimeToBeatResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameTimeToBeatResult";
            };
    
            return GameTimeToBeatResult;
        })();
    
        proto.GameTimeToBeat = (function() {
    
            /**
             * Properties of a GameTimeToBeat.
             * @memberof proto
             * @interface IGameTimeToBeat
             * @property {number|null} [id] GameTimeToBeat id
             * @property {number|null} [game_id] GameTimeToBeat game_id
             * @property {number|null} [hastily] GameTimeToBeat hastily
             * @property {number|null} [normally] GameTimeToBeat normally
             * @property {number|null} [completely] GameTimeToBeat completely
             * @property {number|null} [count] GameTimeToBeat count
             * @property {number|null} [created_at] GameTimeToBeat created_at
             * @property {number|null} [updated_at] GameTimeToBeat updated_at
             * @property {string|null} [checksum] GameTimeToBeat checksum
             */
    
            /**
             * Constructs a new GameTimeToBeat.
             * @memberof proto
             * @classdesc Represents a GameTimeToBeat.
             * @implements IGameTimeToBeat
             * @constructor
             * @param {proto.IGameTimeToBeat=} [properties] Properties to set
             */
            function GameTimeToBeat(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameTimeToBeat id.
             * @member {number} id
             * @memberof proto.GameTimeToBeat
             * @instance
             */
            GameTimeToBeat.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GameTimeToBeat game_id.
             * @member {number} game_id
             * @memberof proto.GameTimeToBeat
             * @instance
             */
            GameTimeToBeat.prototype.game_id = 0;
    
            /**
             * GameTimeToBeat hastily.
             * @member {number} hastily
             * @memberof proto.GameTimeToBeat
             * @instance
             */
            GameTimeToBeat.prototype.hastily = 0;
    
            /**
             * GameTimeToBeat normally.
             * @member {number} normally
             * @memberof proto.GameTimeToBeat
             * @instance
             */
            GameTimeToBeat.prototype.normally = 0;
    
            /**
             * GameTimeToBeat completely.
             * @member {number} completely
             * @memberof proto.GameTimeToBeat
             * @instance
             */
            GameTimeToBeat.prototype.completely = 0;
    
            /**
             * GameTimeToBeat count.
             * @member {number} count
             * @memberof proto.GameTimeToBeat
             * @instance
             */
            GameTimeToBeat.prototype.count = 0;
    
            /**
             * GameTimeToBeat created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.GameTimeToBeat
             * @instance
             */
            GameTimeToBeat.prototype.created_at = null;
    
            /**
             * GameTimeToBeat updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.GameTimeToBeat
             * @instance
             */
            GameTimeToBeat.prototype.updated_at = null;
    
            /**
             * GameTimeToBeat checksum.
             * @member {string} checksum
             * @memberof proto.GameTimeToBeat
             * @instance
             */
            GameTimeToBeat.prototype.checksum = "";
    
            /**
             * Gets the default type url for GameTimeToBeat
             * @function getTypeUrl
             * @memberof proto.GameTimeToBeat
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameTimeToBeat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameTimeToBeat";
            };
    
            return GameTimeToBeat;
        })();
    
        proto.GameTypeResult = (function() {
    
            /**
             * Properties of a GameTypeResult.
             * @memberof proto
             * @interface IGameTypeResult
             * @property {Array.<proto.IGameType>|null} [gametypes] GameTypeResult gametypes
             */
    
            /**
             * Constructs a new GameTypeResult.
             * @memberof proto
             * @classdesc Represents a GameTypeResult.
             * @implements IGameTypeResult
             * @constructor
             * @param {proto.IGameTypeResult=} [properties] Properties to set
             */
            function GameTypeResult(properties) {
                this.gametypes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameTypeResult gametypes.
             * @member {Array.<proto.IGameType>} gametypes
             * @memberof proto.GameTypeResult
             * @instance
             */
            GameTypeResult.prototype.gametypes = $util.emptyArray;
    
            /**
             * Gets the default type url for GameTypeResult
             * @function getTypeUrl
             * @memberof proto.GameTypeResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameTypeResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameTypeResult";
            };
    
            return GameTypeResult;
        })();
    
        proto.GameType = (function() {
    
            /**
             * Properties of a GameType.
             * @memberof proto
             * @interface IGameType
             * @property {number|null} [id] GameType id
             * @property {string|null} [type] GameType type
             * @property {number|null} [created_at] GameType created_at
             * @property {number|null} [updated_at] GameType updated_at
             * @property {string|null} [checksum] GameType checksum
             */
    
            /**
             * Constructs a new GameType.
             * @memberof proto
             * @classdesc Represents a GameType.
             * @implements IGameType
             * @constructor
             * @param {proto.IGameType=} [properties] Properties to set
             */
            function GameType(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameType id.
             * @member {number} id
             * @memberof proto.GameType
             * @instance
             */
            GameType.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GameType type.
             * @member {string} type
             * @memberof proto.GameType
             * @instance
             */
            GameType.prototype.type = "";
    
            /**
             * GameType created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.GameType
             * @instance
             */
            GameType.prototype.created_at = null;
    
            /**
             * GameType updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.GameType
             * @instance
             */
            GameType.prototype.updated_at = null;
    
            /**
             * GameType checksum.
             * @member {string} checksum
             * @memberof proto.GameType
             * @instance
             */
            GameType.prototype.checksum = "";
    
            /**
             * Gets the default type url for GameType
             * @function getTypeUrl
             * @memberof proto.GameType
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameType";
            };
    
            return GameType;
        })();
    
        proto.GameVersionResult = (function() {
    
            /**
             * Properties of a GameVersionResult.
             * @memberof proto
             * @interface IGameVersionResult
             * @property {Array.<proto.IGameVersion>|null} [gameversions] GameVersionResult gameversions
             */
    
            /**
             * Constructs a new GameVersionResult.
             * @memberof proto
             * @classdesc Represents a GameVersionResult.
             * @implements IGameVersionResult
             * @constructor
             * @param {proto.IGameVersionResult=} [properties] Properties to set
             */
            function GameVersionResult(properties) {
                this.gameversions = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameVersionResult gameversions.
             * @member {Array.<proto.IGameVersion>} gameversions
             * @memberof proto.GameVersionResult
             * @instance
             */
            GameVersionResult.prototype.gameversions = $util.emptyArray;
    
            /**
             * Gets the default type url for GameVersionResult
             * @function getTypeUrl
             * @memberof proto.GameVersionResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameVersionResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameVersionResult";
            };
    
            return GameVersionResult;
        })();
    
        proto.GameVersion = (function() {
    
            /**
             * Properties of a GameVersion.
             * @memberof proto
             * @interface IGameVersion
             * @property {number|null} [id] GameVersion id
             * @property {number|null} [created_at] GameVersion created_at
             * @property {Array.<proto.IGameVersionFeature>|null} [features] GameVersion features
             * @property {proto.IGame|null} [game] GameVersion game
             * @property {Array.<proto.IGame>|null} [games] GameVersion games
             * @property {number|null} [updated_at] GameVersion updated_at
             * @property {string|null} [url] GameVersion url
             * @property {string|null} [checksum] GameVersion checksum
             */
    
            /**
             * Constructs a new GameVersion.
             * @memberof proto
             * @classdesc Represents a GameVersion.
             * @implements IGameVersion
             * @constructor
             * @param {proto.IGameVersion=} [properties] Properties to set
             */
            function GameVersion(properties) {
                this.features = [];
                this.games = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameVersion id.
             * @member {number} id
             * @memberof proto.GameVersion
             * @instance
             */
            GameVersion.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GameVersion created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.GameVersion
             * @instance
             */
            GameVersion.prototype.created_at = null;
    
            /**
             * GameVersion features.
             * @member {Array.<proto.IGameVersionFeature>} features
             * @memberof proto.GameVersion
             * @instance
             */
            GameVersion.prototype.features = $util.emptyArray;
    
            /**
             * GameVersion game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.GameVersion
             * @instance
             */
            GameVersion.prototype.game = null;
    
            /**
             * GameVersion games.
             * @member {Array.<proto.IGame>} games
             * @memberof proto.GameVersion
             * @instance
             */
            GameVersion.prototype.games = $util.emptyArray;
    
            /**
             * GameVersion updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.GameVersion
             * @instance
             */
            GameVersion.prototype.updated_at = null;
    
            /**
             * GameVersion url.
             * @member {string} url
             * @memberof proto.GameVersion
             * @instance
             */
            GameVersion.prototype.url = "";
    
            /**
             * GameVersion checksum.
             * @member {string} checksum
             * @memberof proto.GameVersion
             * @instance
             */
            GameVersion.prototype.checksum = "";
    
            /**
             * Gets the default type url for GameVersion
             * @function getTypeUrl
             * @memberof proto.GameVersion
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameVersion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameVersion";
            };
    
            return GameVersion;
        })();
    
        proto.GameVersionFeatureResult = (function() {
    
            /**
             * Properties of a GameVersionFeatureResult.
             * @memberof proto
             * @interface IGameVersionFeatureResult
             * @property {Array.<proto.IGameVersionFeature>|null} [gameversionfeatures] GameVersionFeatureResult gameversionfeatures
             */
    
            /**
             * Constructs a new GameVersionFeatureResult.
             * @memberof proto
             * @classdesc Represents a GameVersionFeatureResult.
             * @implements IGameVersionFeatureResult
             * @constructor
             * @param {proto.IGameVersionFeatureResult=} [properties] Properties to set
             */
            function GameVersionFeatureResult(properties) {
                this.gameversionfeatures = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameVersionFeatureResult gameversionfeatures.
             * @member {Array.<proto.IGameVersionFeature>} gameversionfeatures
             * @memberof proto.GameVersionFeatureResult
             * @instance
             */
            GameVersionFeatureResult.prototype.gameversionfeatures = $util.emptyArray;
    
            /**
             * Gets the default type url for GameVersionFeatureResult
             * @function getTypeUrl
             * @memberof proto.GameVersionFeatureResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameVersionFeatureResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameVersionFeatureResult";
            };
    
            return GameVersionFeatureResult;
        })();
    
        proto.GameVersionFeature = (function() {
    
            /**
             * Properties of a GameVersionFeature.
             * @memberof proto
             * @interface IGameVersionFeature
             * @property {number|null} [id] GameVersionFeature id
             * @property {proto.GameVersionFeatureCategoryEnum|null} [category] GameVersionFeature category
             * @property {string|null} [description] GameVersionFeature description
             * @property {number|null} [position] GameVersionFeature position
             * @property {string|null} [title] GameVersionFeature title
             * @property {Array.<proto.IGameVersionFeatureValue>|null} [values] GameVersionFeature values
             * @property {string|null} [checksum] GameVersionFeature checksum
             */
    
            /**
             * Constructs a new GameVersionFeature.
             * @memberof proto
             * @classdesc Represents a GameVersionFeature.
             * @implements IGameVersionFeature
             * @constructor
             * @param {proto.IGameVersionFeature=} [properties] Properties to set
             */
            function GameVersionFeature(properties) {
                this.values = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameVersionFeature id.
             * @member {number} id
             * @memberof proto.GameVersionFeature
             * @instance
             */
            GameVersionFeature.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GameVersionFeature category.
             * @member {proto.GameVersionFeatureCategoryEnum} category
             * @memberof proto.GameVersionFeature
             * @instance
             */
            GameVersionFeature.prototype.category = 0;
    
            /**
             * GameVersionFeature description.
             * @member {string} description
             * @memberof proto.GameVersionFeature
             * @instance
             */
            GameVersionFeature.prototype.description = "";
    
            /**
             * GameVersionFeature position.
             * @member {number} position
             * @memberof proto.GameVersionFeature
             * @instance
             */
            GameVersionFeature.prototype.position = 0;
    
            /**
             * GameVersionFeature title.
             * @member {string} title
             * @memberof proto.GameVersionFeature
             * @instance
             */
            GameVersionFeature.prototype.title = "";
    
            /**
             * GameVersionFeature values.
             * @member {Array.<proto.IGameVersionFeatureValue>} values
             * @memberof proto.GameVersionFeature
             * @instance
             */
            GameVersionFeature.prototype.values = $util.emptyArray;
    
            /**
             * GameVersionFeature checksum.
             * @member {string} checksum
             * @memberof proto.GameVersionFeature
             * @instance
             */
            GameVersionFeature.prototype.checksum = "";
    
            /**
             * Gets the default type url for GameVersionFeature
             * @function getTypeUrl
             * @memberof proto.GameVersionFeature
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameVersionFeature.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameVersionFeature";
            };
    
            return GameVersionFeature;
        })();
    
        /**
         * GameVersionFeatureCategoryEnum enum.
         * @name proto.GameVersionFeatureCategoryEnum
         * @enum {number}
         * @property {number} BOOLEAN=0 BOOLEAN value
         * @property {number} DESCRIPTION=1 DESCRIPTION value
         */
        proto.GameVersionFeatureCategoryEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "BOOLEAN"] = 0;
            values[valuesById[1] = "DESCRIPTION"] = 1;
            return values;
        })();
    
        proto.GameVersionFeatureValueResult = (function() {
    
            /**
             * Properties of a GameVersionFeatureValueResult.
             * @memberof proto
             * @interface IGameVersionFeatureValueResult
             * @property {Array.<proto.IGameVersionFeatureValue>|null} [gameversionfeaturevalues] GameVersionFeatureValueResult gameversionfeaturevalues
             */
    
            /**
             * Constructs a new GameVersionFeatureValueResult.
             * @memberof proto
             * @classdesc Represents a GameVersionFeatureValueResult.
             * @implements IGameVersionFeatureValueResult
             * @constructor
             * @param {proto.IGameVersionFeatureValueResult=} [properties] Properties to set
             */
            function GameVersionFeatureValueResult(properties) {
                this.gameversionfeaturevalues = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameVersionFeatureValueResult gameversionfeaturevalues.
             * @member {Array.<proto.IGameVersionFeatureValue>} gameversionfeaturevalues
             * @memberof proto.GameVersionFeatureValueResult
             * @instance
             */
            GameVersionFeatureValueResult.prototype.gameversionfeaturevalues = $util.emptyArray;
    
            /**
             * Gets the default type url for GameVersionFeatureValueResult
             * @function getTypeUrl
             * @memberof proto.GameVersionFeatureValueResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameVersionFeatureValueResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameVersionFeatureValueResult";
            };
    
            return GameVersionFeatureValueResult;
        })();
    
        proto.GameVersionFeatureValue = (function() {
    
            /**
             * Properties of a GameVersionFeatureValue.
             * @memberof proto
             * @interface IGameVersionFeatureValue
             * @property {number|null} [id] GameVersionFeatureValue id
             * @property {proto.IGame|null} [game] GameVersionFeatureValue game
             * @property {proto.IGameVersionFeature|null} [game_feature] GameVersionFeatureValue game_feature
             * @property {proto.GameVersionFeatureValueIncludedFeatureEnum|null} [included_feature] GameVersionFeatureValue included_feature
             * @property {string|null} [note] GameVersionFeatureValue note
             * @property {string|null} [checksum] GameVersionFeatureValue checksum
             */
    
            /**
             * Constructs a new GameVersionFeatureValue.
             * @memberof proto
             * @classdesc Represents a GameVersionFeatureValue.
             * @implements IGameVersionFeatureValue
             * @constructor
             * @param {proto.IGameVersionFeatureValue=} [properties] Properties to set
             */
            function GameVersionFeatureValue(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameVersionFeatureValue id.
             * @member {number} id
             * @memberof proto.GameVersionFeatureValue
             * @instance
             */
            GameVersionFeatureValue.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GameVersionFeatureValue game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.GameVersionFeatureValue
             * @instance
             */
            GameVersionFeatureValue.prototype.game = null;
    
            /**
             * GameVersionFeatureValue game_feature.
             * @member {proto.IGameVersionFeature|null|undefined} game_feature
             * @memberof proto.GameVersionFeatureValue
             * @instance
             */
            GameVersionFeatureValue.prototype.game_feature = null;
    
            /**
             * GameVersionFeatureValue included_feature.
             * @member {proto.GameVersionFeatureValueIncludedFeatureEnum} included_feature
             * @memberof proto.GameVersionFeatureValue
             * @instance
             */
            GameVersionFeatureValue.prototype.included_feature = 0;
    
            /**
             * GameVersionFeatureValue note.
             * @member {string} note
             * @memberof proto.GameVersionFeatureValue
             * @instance
             */
            GameVersionFeatureValue.prototype.note = "";
    
            /**
             * GameVersionFeatureValue checksum.
             * @member {string} checksum
             * @memberof proto.GameVersionFeatureValue
             * @instance
             */
            GameVersionFeatureValue.prototype.checksum = "";
    
            /**
             * Gets the default type url for GameVersionFeatureValue
             * @function getTypeUrl
             * @memberof proto.GameVersionFeatureValue
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameVersionFeatureValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameVersionFeatureValue";
            };
    
            return GameVersionFeatureValue;
        })();
    
        /**
         * GameVersionFeatureValueIncludedFeatureEnum enum.
         * @name proto.GameVersionFeatureValueIncludedFeatureEnum
         * @enum {number}
         * @property {number} NOT_INCLUDED=0 NOT_INCLUDED value
         * @property {number} INCLUDED=1 INCLUDED value
         * @property {number} PRE_ORDER_ONLY=2 PRE_ORDER_ONLY value
         */
        proto.GameVersionFeatureValueIncludedFeatureEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NOT_INCLUDED"] = 0;
            values[valuesById[1] = "INCLUDED"] = 1;
            values[valuesById[2] = "PRE_ORDER_ONLY"] = 2;
            return values;
        })();
    
        proto.GameVideoResult = (function() {
    
            /**
             * Properties of a GameVideoResult.
             * @memberof proto
             * @interface IGameVideoResult
             * @property {Array.<proto.IGameVideo>|null} [gamevideos] GameVideoResult gamevideos
             */
    
            /**
             * Constructs a new GameVideoResult.
             * @memberof proto
             * @classdesc Represents a GameVideoResult.
             * @implements IGameVideoResult
             * @constructor
             * @param {proto.IGameVideoResult=} [properties] Properties to set
             */
            function GameVideoResult(properties) {
                this.gamevideos = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameVideoResult gamevideos.
             * @member {Array.<proto.IGameVideo>} gamevideos
             * @memberof proto.GameVideoResult
             * @instance
             */
            GameVideoResult.prototype.gamevideos = $util.emptyArray;
    
            /**
             * Gets the default type url for GameVideoResult
             * @function getTypeUrl
             * @memberof proto.GameVideoResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameVideoResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameVideoResult";
            };
    
            return GameVideoResult;
        })();
    
        proto.GameVideo = (function() {
    
            /**
             * Properties of a GameVideo.
             * @memberof proto
             * @interface IGameVideo
             * @property {number|null} [id] GameVideo id
             * @property {proto.IGame|null} [game] GameVideo game
             * @property {string|null} [name] GameVideo name
             * @property {string|null} [video_id] GameVideo video_id
             * @property {string|null} [checksum] GameVideo checksum
             */
    
            /**
             * Constructs a new GameVideo.
             * @memberof proto
             * @classdesc Represents a GameVideo.
             * @implements IGameVideo
             * @constructor
             * @param {proto.IGameVideo=} [properties] Properties to set
             */
            function GameVideo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GameVideo id.
             * @member {number} id
             * @memberof proto.GameVideo
             * @instance
             */
            GameVideo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * GameVideo game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.GameVideo
             * @instance
             */
            GameVideo.prototype.game = null;
    
            /**
             * GameVideo name.
             * @member {string} name
             * @memberof proto.GameVideo
             * @instance
             */
            GameVideo.prototype.name = "";
    
            /**
             * GameVideo video_id.
             * @member {string} video_id
             * @memberof proto.GameVideo
             * @instance
             */
            GameVideo.prototype.video_id = "";
    
            /**
             * GameVideo checksum.
             * @member {string} checksum
             * @memberof proto.GameVideo
             * @instance
             */
            GameVideo.prototype.checksum = "";
    
            /**
             * Gets the default type url for GameVideo
             * @function getTypeUrl
             * @memberof proto.GameVideo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GameVideo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GameVideo";
            };
    
            return GameVideo;
        })();
    
        proto.GenreResult = (function() {
    
            /**
             * Properties of a GenreResult.
             * @memberof proto
             * @interface IGenreResult
             * @property {Array.<proto.IGenre>|null} [genres] GenreResult genres
             */
    
            /**
             * Constructs a new GenreResult.
             * @memberof proto
             * @classdesc Represents a GenreResult.
             * @implements IGenreResult
             * @constructor
             * @param {proto.IGenreResult=} [properties] Properties to set
             */
            function GenreResult(properties) {
                this.genres = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * GenreResult genres.
             * @member {Array.<proto.IGenre>} genres
             * @memberof proto.GenreResult
             * @instance
             */
            GenreResult.prototype.genres = $util.emptyArray;
    
            /**
             * Gets the default type url for GenreResult
             * @function getTypeUrl
             * @memberof proto.GenreResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GenreResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.GenreResult";
            };
    
            return GenreResult;
        })();
    
        proto.Genre = (function() {
    
            /**
             * Properties of a Genre.
             * @memberof proto
             * @interface IGenre
             * @property {number|null} [id] Genre id
             * @property {number|null} [created_at] Genre created_at
             * @property {string|null} [name] Genre name
             * @property {string|null} [slug] Genre slug
             * @property {number|null} [updated_at] Genre updated_at
             * @property {string|null} [url] Genre url
             * @property {string|null} [checksum] Genre checksum
             */
    
            /**
             * Constructs a new Genre.
             * @memberof proto
             * @classdesc Represents a Genre.
             * @implements IGenre
             * @constructor
             * @param {proto.IGenre=} [properties] Properties to set
             */
            function Genre(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Genre id.
             * @member {number} id
             * @memberof proto.Genre
             * @instance
             */
            Genre.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Genre created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.Genre
             * @instance
             */
            Genre.prototype.created_at = null;
    
            /**
             * Genre name.
             * @member {string} name
             * @memberof proto.Genre
             * @instance
             */
            Genre.prototype.name = "";
    
            /**
             * Genre slug.
             * @member {string} slug
             * @memberof proto.Genre
             * @instance
             */
            Genre.prototype.slug = "";
    
            /**
             * Genre updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.Genre
             * @instance
             */
            Genre.prototype.updated_at = null;
    
            /**
             * Genre url.
             * @member {string} url
             * @memberof proto.Genre
             * @instance
             */
            Genre.prototype.url = "";
    
            /**
             * Genre checksum.
             * @member {string} checksum
             * @memberof proto.Genre
             * @instance
             */
            Genre.prototype.checksum = "";
    
            /**
             * Gets the default type url for Genre
             * @function getTypeUrl
             * @memberof proto.Genre
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Genre.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Genre";
            };
    
            return Genre;
        })();
    
        proto.InvolvedCompanyResult = (function() {
    
            /**
             * Properties of an InvolvedCompanyResult.
             * @memberof proto
             * @interface IInvolvedCompanyResult
             * @property {Array.<proto.IInvolvedCompany>|null} [involvedcompanies] InvolvedCompanyResult involvedcompanies
             */
    
            /**
             * Constructs a new InvolvedCompanyResult.
             * @memberof proto
             * @classdesc Represents an InvolvedCompanyResult.
             * @implements IInvolvedCompanyResult
             * @constructor
             * @param {proto.IInvolvedCompanyResult=} [properties] Properties to set
             */
            function InvolvedCompanyResult(properties) {
                this.involvedcompanies = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * InvolvedCompanyResult involvedcompanies.
             * @member {Array.<proto.IInvolvedCompany>} involvedcompanies
             * @memberof proto.InvolvedCompanyResult
             * @instance
             */
            InvolvedCompanyResult.prototype.involvedcompanies = $util.emptyArray;
    
            /**
             * Gets the default type url for InvolvedCompanyResult
             * @function getTypeUrl
             * @memberof proto.InvolvedCompanyResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            InvolvedCompanyResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.InvolvedCompanyResult";
            };
    
            return InvolvedCompanyResult;
        })();
    
        proto.InvolvedCompany = (function() {
    
            /**
             * Properties of an InvolvedCompany.
             * @memberof proto
             * @interface IInvolvedCompany
             * @property {number|null} [id] InvolvedCompany id
             * @property {proto.ICompany|null} [company] InvolvedCompany company
             * @property {number|null} [created_at] InvolvedCompany created_at
             * @property {boolean|null} [developer] InvolvedCompany developer
             * @property {proto.IGame|null} [game] InvolvedCompany game
             * @property {boolean|null} [porting] InvolvedCompany porting
             * @property {boolean|null} [publisher] InvolvedCompany publisher
             * @property {boolean|null} [supporting] InvolvedCompany supporting
             * @property {number|null} [updated_at] InvolvedCompany updated_at
             * @property {string|null} [checksum] InvolvedCompany checksum
             */
    
            /**
             * Constructs a new InvolvedCompany.
             * @memberof proto
             * @classdesc Represents an InvolvedCompany.
             * @implements IInvolvedCompany
             * @constructor
             * @param {proto.IInvolvedCompany=} [properties] Properties to set
             */
            function InvolvedCompany(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * InvolvedCompany id.
             * @member {number} id
             * @memberof proto.InvolvedCompany
             * @instance
             */
            InvolvedCompany.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * InvolvedCompany company.
             * @member {proto.ICompany|null|undefined} company
             * @memberof proto.InvolvedCompany
             * @instance
             */
            InvolvedCompany.prototype.company = null;
    
            /**
             * InvolvedCompany created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.InvolvedCompany
             * @instance
             */
            InvolvedCompany.prototype.created_at = null;
    
            /**
             * InvolvedCompany developer.
             * @member {boolean} developer
             * @memberof proto.InvolvedCompany
             * @instance
             */
            InvolvedCompany.prototype.developer = false;
    
            /**
             * InvolvedCompany game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.InvolvedCompany
             * @instance
             */
            InvolvedCompany.prototype.game = null;
    
            /**
             * InvolvedCompany porting.
             * @member {boolean} porting
             * @memberof proto.InvolvedCompany
             * @instance
             */
            InvolvedCompany.prototype.porting = false;
    
            /**
             * InvolvedCompany publisher.
             * @member {boolean} publisher
             * @memberof proto.InvolvedCompany
             * @instance
             */
            InvolvedCompany.prototype.publisher = false;
    
            /**
             * InvolvedCompany supporting.
             * @member {boolean} supporting
             * @memberof proto.InvolvedCompany
             * @instance
             */
            InvolvedCompany.prototype.supporting = false;
    
            /**
             * InvolvedCompany updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.InvolvedCompany
             * @instance
             */
            InvolvedCompany.prototype.updated_at = null;
    
            /**
             * InvolvedCompany checksum.
             * @member {string} checksum
             * @memberof proto.InvolvedCompany
             * @instance
             */
            InvolvedCompany.prototype.checksum = "";
    
            /**
             * Gets the default type url for InvolvedCompany
             * @function getTypeUrl
             * @memberof proto.InvolvedCompany
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            InvolvedCompany.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.InvolvedCompany";
            };
    
            return InvolvedCompany;
        })();
    
        proto.KeywordResult = (function() {
    
            /**
             * Properties of a KeywordResult.
             * @memberof proto
             * @interface IKeywordResult
             * @property {Array.<proto.IKeyword>|null} [keywords] KeywordResult keywords
             */
    
            /**
             * Constructs a new KeywordResult.
             * @memberof proto
             * @classdesc Represents a KeywordResult.
             * @implements IKeywordResult
             * @constructor
             * @param {proto.IKeywordResult=} [properties] Properties to set
             */
            function KeywordResult(properties) {
                this.keywords = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * KeywordResult keywords.
             * @member {Array.<proto.IKeyword>} keywords
             * @memberof proto.KeywordResult
             * @instance
             */
            KeywordResult.prototype.keywords = $util.emptyArray;
    
            /**
             * Gets the default type url for KeywordResult
             * @function getTypeUrl
             * @memberof proto.KeywordResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            KeywordResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.KeywordResult";
            };
    
            return KeywordResult;
        })();
    
        proto.Keyword = (function() {
    
            /**
             * Properties of a Keyword.
             * @memberof proto
             * @interface IKeyword
             * @property {number|null} [id] Keyword id
             * @property {number|null} [created_at] Keyword created_at
             * @property {string|null} [name] Keyword name
             * @property {string|null} [slug] Keyword slug
             * @property {number|null} [updated_at] Keyword updated_at
             * @property {string|null} [url] Keyword url
             * @property {string|null} [checksum] Keyword checksum
             */
    
            /**
             * Constructs a new Keyword.
             * @memberof proto
             * @classdesc Represents a Keyword.
             * @implements IKeyword
             * @constructor
             * @param {proto.IKeyword=} [properties] Properties to set
             */
            function Keyword(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Keyword id.
             * @member {number} id
             * @memberof proto.Keyword
             * @instance
             */
            Keyword.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Keyword created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.Keyword
             * @instance
             */
            Keyword.prototype.created_at = null;
    
            /**
             * Keyword name.
             * @member {string} name
             * @memberof proto.Keyword
             * @instance
             */
            Keyword.prototype.name = "";
    
            /**
             * Keyword slug.
             * @member {string} slug
             * @memberof proto.Keyword
             * @instance
             */
            Keyword.prototype.slug = "";
    
            /**
             * Keyword updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.Keyword
             * @instance
             */
            Keyword.prototype.updated_at = null;
    
            /**
             * Keyword url.
             * @member {string} url
             * @memberof proto.Keyword
             * @instance
             */
            Keyword.prototype.url = "";
    
            /**
             * Keyword checksum.
             * @member {string} checksum
             * @memberof proto.Keyword
             * @instance
             */
            Keyword.prototype.checksum = "";
    
            /**
             * Gets the default type url for Keyword
             * @function getTypeUrl
             * @memberof proto.Keyword
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Keyword.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Keyword";
            };
    
            return Keyword;
        })();
    
        proto.LanguageResult = (function() {
    
            /**
             * Properties of a LanguageResult.
             * @memberof proto
             * @interface ILanguageResult
             * @property {Array.<proto.ILanguage>|null} [languages] LanguageResult languages
             */
    
            /**
             * Constructs a new LanguageResult.
             * @memberof proto
             * @classdesc Represents a LanguageResult.
             * @implements ILanguageResult
             * @constructor
             * @param {proto.ILanguageResult=} [properties] Properties to set
             */
            function LanguageResult(properties) {
                this.languages = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LanguageResult languages.
             * @member {Array.<proto.ILanguage>} languages
             * @memberof proto.LanguageResult
             * @instance
             */
            LanguageResult.prototype.languages = $util.emptyArray;
    
            /**
             * Gets the default type url for LanguageResult
             * @function getTypeUrl
             * @memberof proto.LanguageResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LanguageResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.LanguageResult";
            };
    
            return LanguageResult;
        })();
    
        proto.Language = (function() {
    
            /**
             * Properties of a Language.
             * @memberof proto
             * @interface ILanguage
             * @property {number|null} [id] Language id
             * @property {string|null} [name] Language name
             * @property {string|null} [native_name] Language native_name
             * @property {string|null} [locale] Language locale
             * @property {number|null} [created_at] Language created_at
             * @property {number|null} [updated_at] Language updated_at
             * @property {string|null} [checksum] Language checksum
             */
    
            /**
             * Constructs a new Language.
             * @memberof proto
             * @classdesc Represents a Language.
             * @implements ILanguage
             * @constructor
             * @param {proto.ILanguage=} [properties] Properties to set
             */
            function Language(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Language id.
             * @member {number} id
             * @memberof proto.Language
             * @instance
             */
            Language.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Language name.
             * @member {string} name
             * @memberof proto.Language
             * @instance
             */
            Language.prototype.name = "";
    
            /**
             * Language native_name.
             * @member {string} native_name
             * @memberof proto.Language
             * @instance
             */
            Language.prototype.native_name = "";
    
            /**
             * Language locale.
             * @member {string} locale
             * @memberof proto.Language
             * @instance
             */
            Language.prototype.locale = "";
    
            /**
             * Language created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.Language
             * @instance
             */
            Language.prototype.created_at = null;
    
            /**
             * Language updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.Language
             * @instance
             */
            Language.prototype.updated_at = null;
    
            /**
             * Language checksum.
             * @member {string} checksum
             * @memberof proto.Language
             * @instance
             */
            Language.prototype.checksum = "";
    
            /**
             * Gets the default type url for Language
             * @function getTypeUrl
             * @memberof proto.Language
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Language.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Language";
            };
    
            return Language;
        })();
    
        proto.LanguageSupportResult = (function() {
    
            /**
             * Properties of a LanguageSupportResult.
             * @memberof proto
             * @interface ILanguageSupportResult
             * @property {Array.<proto.ILanguageSupport>|null} [languagesupports] LanguageSupportResult languagesupports
             */
    
            /**
             * Constructs a new LanguageSupportResult.
             * @memberof proto
             * @classdesc Represents a LanguageSupportResult.
             * @implements ILanguageSupportResult
             * @constructor
             * @param {proto.ILanguageSupportResult=} [properties] Properties to set
             */
            function LanguageSupportResult(properties) {
                this.languagesupports = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LanguageSupportResult languagesupports.
             * @member {Array.<proto.ILanguageSupport>} languagesupports
             * @memberof proto.LanguageSupportResult
             * @instance
             */
            LanguageSupportResult.prototype.languagesupports = $util.emptyArray;
    
            /**
             * Gets the default type url for LanguageSupportResult
             * @function getTypeUrl
             * @memberof proto.LanguageSupportResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LanguageSupportResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.LanguageSupportResult";
            };
    
            return LanguageSupportResult;
        })();
    
        proto.LanguageSupport = (function() {
    
            /**
             * Properties of a LanguageSupport.
             * @memberof proto
             * @interface ILanguageSupport
             * @property {number|null} [id] LanguageSupport id
             * @property {proto.IGame|null} [game] LanguageSupport game
             * @property {proto.ILanguage|null} [language] LanguageSupport language
             * @property {proto.ILanguageSupportType|null} [language_support_type] LanguageSupport language_support_type
             * @property {number|null} [created_at] LanguageSupport created_at
             * @property {number|null} [updated_at] LanguageSupport updated_at
             * @property {string|null} [checksum] LanguageSupport checksum
             */
    
            /**
             * Constructs a new LanguageSupport.
             * @memberof proto
             * @classdesc Represents a LanguageSupport.
             * @implements ILanguageSupport
             * @constructor
             * @param {proto.ILanguageSupport=} [properties] Properties to set
             */
            function LanguageSupport(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LanguageSupport id.
             * @member {number} id
             * @memberof proto.LanguageSupport
             * @instance
             */
            LanguageSupport.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * LanguageSupport game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.LanguageSupport
             * @instance
             */
            LanguageSupport.prototype.game = null;
    
            /**
             * LanguageSupport language.
             * @member {proto.ILanguage|null|undefined} language
             * @memberof proto.LanguageSupport
             * @instance
             */
            LanguageSupport.prototype.language = null;
    
            /**
             * LanguageSupport language_support_type.
             * @member {proto.ILanguageSupportType|null|undefined} language_support_type
             * @memberof proto.LanguageSupport
             * @instance
             */
            LanguageSupport.prototype.language_support_type = null;
    
            /**
             * LanguageSupport created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.LanguageSupport
             * @instance
             */
            LanguageSupport.prototype.created_at = null;
    
            /**
             * LanguageSupport updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.LanguageSupport
             * @instance
             */
            LanguageSupport.prototype.updated_at = null;
    
            /**
             * LanguageSupport checksum.
             * @member {string} checksum
             * @memberof proto.LanguageSupport
             * @instance
             */
            LanguageSupport.prototype.checksum = "";
    
            /**
             * Gets the default type url for LanguageSupport
             * @function getTypeUrl
             * @memberof proto.LanguageSupport
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LanguageSupport.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.LanguageSupport";
            };
    
            return LanguageSupport;
        })();
    
        proto.LanguageSupportTypeResult = (function() {
    
            /**
             * Properties of a LanguageSupportTypeResult.
             * @memberof proto
             * @interface ILanguageSupportTypeResult
             * @property {Array.<proto.ILanguageSupportType>|null} [languagesupporttypes] LanguageSupportTypeResult languagesupporttypes
             */
    
            /**
             * Constructs a new LanguageSupportTypeResult.
             * @memberof proto
             * @classdesc Represents a LanguageSupportTypeResult.
             * @implements ILanguageSupportTypeResult
             * @constructor
             * @param {proto.ILanguageSupportTypeResult=} [properties] Properties to set
             */
            function LanguageSupportTypeResult(properties) {
                this.languagesupporttypes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LanguageSupportTypeResult languagesupporttypes.
             * @member {Array.<proto.ILanguageSupportType>} languagesupporttypes
             * @memberof proto.LanguageSupportTypeResult
             * @instance
             */
            LanguageSupportTypeResult.prototype.languagesupporttypes = $util.emptyArray;
    
            /**
             * Gets the default type url for LanguageSupportTypeResult
             * @function getTypeUrl
             * @memberof proto.LanguageSupportTypeResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LanguageSupportTypeResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.LanguageSupportTypeResult";
            };
    
            return LanguageSupportTypeResult;
        })();
    
        proto.LanguageSupportType = (function() {
    
            /**
             * Properties of a LanguageSupportType.
             * @memberof proto
             * @interface ILanguageSupportType
             * @property {number|null} [id] LanguageSupportType id
             * @property {string|null} [name] LanguageSupportType name
             * @property {number|null} [created_at] LanguageSupportType created_at
             * @property {number|null} [updated_at] LanguageSupportType updated_at
             * @property {string|null} [checksum] LanguageSupportType checksum
             */
    
            /**
             * Constructs a new LanguageSupportType.
             * @memberof proto
             * @classdesc Represents a LanguageSupportType.
             * @implements ILanguageSupportType
             * @constructor
             * @param {proto.ILanguageSupportType=} [properties] Properties to set
             */
            function LanguageSupportType(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * LanguageSupportType id.
             * @member {number} id
             * @memberof proto.LanguageSupportType
             * @instance
             */
            LanguageSupportType.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * LanguageSupportType name.
             * @member {string} name
             * @memberof proto.LanguageSupportType
             * @instance
             */
            LanguageSupportType.prototype.name = "";
    
            /**
             * LanguageSupportType created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.LanguageSupportType
             * @instance
             */
            LanguageSupportType.prototype.created_at = null;
    
            /**
             * LanguageSupportType updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.LanguageSupportType
             * @instance
             */
            LanguageSupportType.prototype.updated_at = null;
    
            /**
             * LanguageSupportType checksum.
             * @member {string} checksum
             * @memberof proto.LanguageSupportType
             * @instance
             */
            LanguageSupportType.prototype.checksum = "";
    
            /**
             * Gets the default type url for LanguageSupportType
             * @function getTypeUrl
             * @memberof proto.LanguageSupportType
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LanguageSupportType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.LanguageSupportType";
            };
    
            return LanguageSupportType;
        })();
    
        proto.MultiplayerModeResult = (function() {
    
            /**
             * Properties of a MultiplayerModeResult.
             * @memberof proto
             * @interface IMultiplayerModeResult
             * @property {Array.<proto.IMultiplayerMode>|null} [multiplayermodes] MultiplayerModeResult multiplayermodes
             */
    
            /**
             * Constructs a new MultiplayerModeResult.
             * @memberof proto
             * @classdesc Represents a MultiplayerModeResult.
             * @implements IMultiplayerModeResult
             * @constructor
             * @param {proto.IMultiplayerModeResult=} [properties] Properties to set
             */
            function MultiplayerModeResult(properties) {
                this.multiplayermodes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MultiplayerModeResult multiplayermodes.
             * @member {Array.<proto.IMultiplayerMode>} multiplayermodes
             * @memberof proto.MultiplayerModeResult
             * @instance
             */
            MultiplayerModeResult.prototype.multiplayermodes = $util.emptyArray;
    
            /**
             * Gets the default type url for MultiplayerModeResult
             * @function getTypeUrl
             * @memberof proto.MultiplayerModeResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MultiplayerModeResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.MultiplayerModeResult";
            };
    
            return MultiplayerModeResult;
        })();
    
        proto.MultiplayerMode = (function() {
    
            /**
             * Properties of a MultiplayerMode.
             * @memberof proto
             * @interface IMultiplayerMode
             * @property {number|null} [id] MultiplayerMode id
             * @property {boolean|null} [campaigncoop] MultiplayerMode campaigncoop
             * @property {boolean|null} [dropin] MultiplayerMode dropin
             * @property {proto.IGame|null} [game] MultiplayerMode game
             * @property {boolean|null} [lancoop] MultiplayerMode lancoop
             * @property {boolean|null} [offlinecoop] MultiplayerMode offlinecoop
             * @property {number|null} [offlinecoopmax] MultiplayerMode offlinecoopmax
             * @property {number|null} [offlinemax] MultiplayerMode offlinemax
             * @property {boolean|null} [onlinecoop] MultiplayerMode onlinecoop
             * @property {number|null} [onlinecoopmax] MultiplayerMode onlinecoopmax
             * @property {number|null} [onlinemax] MultiplayerMode onlinemax
             * @property {proto.IPlatform|null} [platform] MultiplayerMode platform
             * @property {boolean|null} [splitscreen] MultiplayerMode splitscreen
             * @property {boolean|null} [splitscreenonline] MultiplayerMode splitscreenonline
             * @property {string|null} [checksum] MultiplayerMode checksum
             */
    
            /**
             * Constructs a new MultiplayerMode.
             * @memberof proto
             * @classdesc Represents a MultiplayerMode.
             * @implements IMultiplayerMode
             * @constructor
             * @param {proto.IMultiplayerMode=} [properties] Properties to set
             */
            function MultiplayerMode(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * MultiplayerMode id.
             * @member {number} id
             * @memberof proto.MultiplayerMode
             * @instance
             */
            MultiplayerMode.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * MultiplayerMode campaigncoop.
             * @member {boolean} campaigncoop
             * @memberof proto.MultiplayerMode
             * @instance
             */
            MultiplayerMode.prototype.campaigncoop = false;
    
            /**
             * MultiplayerMode dropin.
             * @member {boolean} dropin
             * @memberof proto.MultiplayerMode
             * @instance
             */
            MultiplayerMode.prototype.dropin = false;
    
            /**
             * MultiplayerMode game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.MultiplayerMode
             * @instance
             */
            MultiplayerMode.prototype.game = null;
    
            /**
             * MultiplayerMode lancoop.
             * @member {boolean} lancoop
             * @memberof proto.MultiplayerMode
             * @instance
             */
            MultiplayerMode.prototype.lancoop = false;
    
            /**
             * MultiplayerMode offlinecoop.
             * @member {boolean} offlinecoop
             * @memberof proto.MultiplayerMode
             * @instance
             */
            MultiplayerMode.prototype.offlinecoop = false;
    
            /**
             * MultiplayerMode offlinecoopmax.
             * @member {number} offlinecoopmax
             * @memberof proto.MultiplayerMode
             * @instance
             */
            MultiplayerMode.prototype.offlinecoopmax = 0;
    
            /**
             * MultiplayerMode offlinemax.
             * @member {number} offlinemax
             * @memberof proto.MultiplayerMode
             * @instance
             */
            MultiplayerMode.prototype.offlinemax = 0;
    
            /**
             * MultiplayerMode onlinecoop.
             * @member {boolean} onlinecoop
             * @memberof proto.MultiplayerMode
             * @instance
             */
            MultiplayerMode.prototype.onlinecoop = false;
    
            /**
             * MultiplayerMode onlinecoopmax.
             * @member {number} onlinecoopmax
             * @memberof proto.MultiplayerMode
             * @instance
             */
            MultiplayerMode.prototype.onlinecoopmax = 0;
    
            /**
             * MultiplayerMode onlinemax.
             * @member {number} onlinemax
             * @memberof proto.MultiplayerMode
             * @instance
             */
            MultiplayerMode.prototype.onlinemax = 0;
    
            /**
             * MultiplayerMode platform.
             * @member {proto.IPlatform|null|undefined} platform
             * @memberof proto.MultiplayerMode
             * @instance
             */
            MultiplayerMode.prototype.platform = null;
    
            /**
             * MultiplayerMode splitscreen.
             * @member {boolean} splitscreen
             * @memberof proto.MultiplayerMode
             * @instance
             */
            MultiplayerMode.prototype.splitscreen = false;
    
            /**
             * MultiplayerMode splitscreenonline.
             * @member {boolean} splitscreenonline
             * @memberof proto.MultiplayerMode
             * @instance
             */
            MultiplayerMode.prototype.splitscreenonline = false;
    
            /**
             * MultiplayerMode checksum.
             * @member {string} checksum
             * @memberof proto.MultiplayerMode
             * @instance
             */
            MultiplayerMode.prototype.checksum = "";
    
            /**
             * Gets the default type url for MultiplayerMode
             * @function getTypeUrl
             * @memberof proto.MultiplayerMode
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            MultiplayerMode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.MultiplayerMode";
            };
    
            return MultiplayerMode;
        })();
    
        proto.NetworkTypeResult = (function() {
    
            /**
             * Properties of a NetworkTypeResult.
             * @memberof proto
             * @interface INetworkTypeResult
             * @property {Array.<proto.INetworkType>|null} [networktypes] NetworkTypeResult networktypes
             */
    
            /**
             * Constructs a new NetworkTypeResult.
             * @memberof proto
             * @classdesc Represents a NetworkTypeResult.
             * @implements INetworkTypeResult
             * @constructor
             * @param {proto.INetworkTypeResult=} [properties] Properties to set
             */
            function NetworkTypeResult(properties) {
                this.networktypes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NetworkTypeResult networktypes.
             * @member {Array.<proto.INetworkType>} networktypes
             * @memberof proto.NetworkTypeResult
             * @instance
             */
            NetworkTypeResult.prototype.networktypes = $util.emptyArray;
    
            /**
             * Gets the default type url for NetworkTypeResult
             * @function getTypeUrl
             * @memberof proto.NetworkTypeResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NetworkTypeResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.NetworkTypeResult";
            };
    
            return NetworkTypeResult;
        })();
    
        proto.NetworkType = (function() {
    
            /**
             * Properties of a NetworkType.
             * @memberof proto
             * @interface INetworkType
             * @property {number|null} [id] NetworkType id
             * @property {string|null} [name] NetworkType name
             * @property {Array.<proto.IEventNetwork>|null} [event_networks] NetworkType event_networks
             * @property {number|null} [created_at] NetworkType created_at
             * @property {number|null} [updated_at] NetworkType updated_at
             * @property {string|null} [checksum] NetworkType checksum
             */
    
            /**
             * Constructs a new NetworkType.
             * @memberof proto
             * @classdesc Represents a NetworkType.
             * @implements INetworkType
             * @constructor
             * @param {proto.INetworkType=} [properties] Properties to set
             */
            function NetworkType(properties) {
                this.event_networks = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * NetworkType id.
             * @member {number} id
             * @memberof proto.NetworkType
             * @instance
             */
            NetworkType.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * NetworkType name.
             * @member {string} name
             * @memberof proto.NetworkType
             * @instance
             */
            NetworkType.prototype.name = "";
    
            /**
             * NetworkType event_networks.
             * @member {Array.<proto.IEventNetwork>} event_networks
             * @memberof proto.NetworkType
             * @instance
             */
            NetworkType.prototype.event_networks = $util.emptyArray;
    
            /**
             * NetworkType created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.NetworkType
             * @instance
             */
            NetworkType.prototype.created_at = null;
    
            /**
             * NetworkType updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.NetworkType
             * @instance
             */
            NetworkType.prototype.updated_at = null;
    
            /**
             * NetworkType checksum.
             * @member {string} checksum
             * @memberof proto.NetworkType
             * @instance
             */
            NetworkType.prototype.checksum = "";
    
            /**
             * Gets the default type url for NetworkType
             * @function getTypeUrl
             * @memberof proto.NetworkType
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NetworkType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.NetworkType";
            };
    
            return NetworkType;
        })();
    
        proto.PlatformResult = (function() {
    
            /**
             * Properties of a PlatformResult.
             * @memberof proto
             * @interface IPlatformResult
             * @property {Array.<proto.IPlatform>|null} [platforms] PlatformResult platforms
             */
    
            /**
             * Constructs a new PlatformResult.
             * @memberof proto
             * @classdesc Represents a PlatformResult.
             * @implements IPlatformResult
             * @constructor
             * @param {proto.IPlatformResult=} [properties] Properties to set
             */
            function PlatformResult(properties) {
                this.platforms = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformResult platforms.
             * @member {Array.<proto.IPlatform>} platforms
             * @memberof proto.PlatformResult
             * @instance
             */
            PlatformResult.prototype.platforms = $util.emptyArray;
    
            /**
             * Gets the default type url for PlatformResult
             * @function getTypeUrl
             * @memberof proto.PlatformResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlatformResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlatformResult";
            };
    
            return PlatformResult;
        })();
    
        proto.Platform = (function() {
    
            /**
             * Properties of a Platform.
             * @memberof proto
             * @interface IPlatform
             * @property {number|null} [id] Platform id
             * @property {string|null} [abbreviation] Platform abbreviation
             * @property {string|null} [alternative_name] Platform alternative_name
             * @property {proto.PlatformCategoryEnum|null} [category] Platform category
             * @property {number|null} [created_at] Platform created_at
             * @property {number|null} [generation] Platform generation
             * @property {string|null} [name] Platform name
             * @property {proto.IPlatformLogo|null} [platform_logo] Platform platform_logo
             * @property {proto.IPlatformFamily|null} [platform_family] Platform platform_family
             * @property {string|null} [slug] Platform slug
             * @property {string|null} [summary] Platform summary
             * @property {number|null} [updated_at] Platform updated_at
             * @property {string|null} [url] Platform url
             * @property {Array.<proto.IPlatformVersion>|null} [versions] Platform versions
             * @property {Array.<proto.IPlatformWebsite>|null} [websites] Platform websites
             * @property {string|null} [checksum] Platform checksum
             * @property {proto.IPlatformType|null} [platform_type] Platform platform_type
             */
    
            /**
             * Constructs a new Platform.
             * @memberof proto
             * @classdesc Represents a Platform.
             * @implements IPlatform
             * @constructor
             * @param {proto.IPlatform=} [properties] Properties to set
             */
            function Platform(properties) {
                this.versions = [];
                this.websites = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Platform id.
             * @member {number} id
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Platform abbreviation.
             * @member {string} abbreviation
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.abbreviation = "";
    
            /**
             * Platform alternative_name.
             * @member {string} alternative_name
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.alternative_name = "";
    
            /**
             * Platform category.
             * @member {proto.PlatformCategoryEnum} category
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.category = 0;
    
            /**
             * Platform created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.created_at = null;
    
            /**
             * Platform generation.
             * @member {number} generation
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.generation = 0;
    
            /**
             * Platform name.
             * @member {string} name
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.name = "";
    
            /**
             * Platform platform_logo.
             * @member {proto.IPlatformLogo|null|undefined} platform_logo
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.platform_logo = null;
    
            /**
             * Platform platform_family.
             * @member {proto.IPlatformFamily|null|undefined} platform_family
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.platform_family = null;
    
            /**
             * Platform slug.
             * @member {string} slug
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.slug = "";
    
            /**
             * Platform summary.
             * @member {string} summary
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.summary = "";
    
            /**
             * Platform updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.updated_at = null;
    
            /**
             * Platform url.
             * @member {string} url
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.url = "";
    
            /**
             * Platform versions.
             * @member {Array.<proto.IPlatformVersion>} versions
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.versions = $util.emptyArray;
    
            /**
             * Platform websites.
             * @member {Array.<proto.IPlatformWebsite>} websites
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.websites = $util.emptyArray;
    
            /**
             * Platform checksum.
             * @member {string} checksum
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.checksum = "";
    
            /**
             * Platform platform_type.
             * @member {proto.IPlatformType|null|undefined} platform_type
             * @memberof proto.Platform
             * @instance
             */
            Platform.prototype.platform_type = null;
    
            /**
             * Gets the default type url for Platform
             * @function getTypeUrl
             * @memberof proto.Platform
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Platform.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Platform";
            };
    
            return Platform;
        })();
    
        /**
         * PlatformCategoryEnum enum.
         * @name proto.PlatformCategoryEnum
         * @enum {number}
         * @property {number} PLATFORM_CATEGORY_NULL=0 PLATFORM_CATEGORY_NULL value
         * @property {number} CONSOLE=1 CONSOLE value
         * @property {number} ARCADE=2 ARCADE value
         * @property {number} PLATFORM=3 PLATFORM value
         * @property {number} OPERATING_SYSTEM=4 OPERATING_SYSTEM value
         * @property {number} PORTABLE_CONSOLE=5 PORTABLE_CONSOLE value
         * @property {number} COMPUTER=6 COMPUTER value
         */
        proto.PlatformCategoryEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PLATFORM_CATEGORY_NULL"] = 0;
            values[valuesById[1] = "CONSOLE"] = 1;
            values[valuesById[2] = "ARCADE"] = 2;
            values[valuesById[3] = "PLATFORM"] = 3;
            values[valuesById[4] = "OPERATING_SYSTEM"] = 4;
            values[valuesById[5] = "PORTABLE_CONSOLE"] = 5;
            values[valuesById[6] = "COMPUTER"] = 6;
            return values;
        })();
    
        proto.PlatformFamilyResult = (function() {
    
            /**
             * Properties of a PlatformFamilyResult.
             * @memberof proto
             * @interface IPlatformFamilyResult
             * @property {Array.<proto.IPlatformFamily>|null} [platformfamilies] PlatformFamilyResult platformfamilies
             */
    
            /**
             * Constructs a new PlatformFamilyResult.
             * @memberof proto
             * @classdesc Represents a PlatformFamilyResult.
             * @implements IPlatformFamilyResult
             * @constructor
             * @param {proto.IPlatformFamilyResult=} [properties] Properties to set
             */
            function PlatformFamilyResult(properties) {
                this.platformfamilies = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformFamilyResult platformfamilies.
             * @member {Array.<proto.IPlatformFamily>} platformfamilies
             * @memberof proto.PlatformFamilyResult
             * @instance
             */
            PlatformFamilyResult.prototype.platformfamilies = $util.emptyArray;
    
            /**
             * Gets the default type url for PlatformFamilyResult
             * @function getTypeUrl
             * @memberof proto.PlatformFamilyResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlatformFamilyResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlatformFamilyResult";
            };
    
            return PlatformFamilyResult;
        })();
    
        proto.PlatformFamily = (function() {
    
            /**
             * Properties of a PlatformFamily.
             * @memberof proto
             * @interface IPlatformFamily
             * @property {number|null} [id] PlatformFamily id
             * @property {string|null} [name] PlatformFamily name
             * @property {string|null} [slug] PlatformFamily slug
             * @property {string|null} [checksum] PlatformFamily checksum
             */
    
            /**
             * Constructs a new PlatformFamily.
             * @memberof proto
             * @classdesc Represents a PlatformFamily.
             * @implements IPlatformFamily
             * @constructor
             * @param {proto.IPlatformFamily=} [properties] Properties to set
             */
            function PlatformFamily(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformFamily id.
             * @member {number} id
             * @memberof proto.PlatformFamily
             * @instance
             */
            PlatformFamily.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * PlatformFamily name.
             * @member {string} name
             * @memberof proto.PlatformFamily
             * @instance
             */
            PlatformFamily.prototype.name = "";
    
            /**
             * PlatformFamily slug.
             * @member {string} slug
             * @memberof proto.PlatformFamily
             * @instance
             */
            PlatformFamily.prototype.slug = "";
    
            /**
             * PlatformFamily checksum.
             * @member {string} checksum
             * @memberof proto.PlatformFamily
             * @instance
             */
            PlatformFamily.prototype.checksum = "";
    
            /**
             * Gets the default type url for PlatformFamily
             * @function getTypeUrl
             * @memberof proto.PlatformFamily
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlatformFamily.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlatformFamily";
            };
    
            return PlatformFamily;
        })();
    
        proto.PlatformLogoResult = (function() {
    
            /**
             * Properties of a PlatformLogoResult.
             * @memberof proto
             * @interface IPlatformLogoResult
             * @property {Array.<proto.IPlatformLogo>|null} [platformlogos] PlatformLogoResult platformlogos
             */
    
            /**
             * Constructs a new PlatformLogoResult.
             * @memberof proto
             * @classdesc Represents a PlatformLogoResult.
             * @implements IPlatformLogoResult
             * @constructor
             * @param {proto.IPlatformLogoResult=} [properties] Properties to set
             */
            function PlatformLogoResult(properties) {
                this.platformlogos = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformLogoResult platformlogos.
             * @member {Array.<proto.IPlatformLogo>} platformlogos
             * @memberof proto.PlatformLogoResult
             * @instance
             */
            PlatformLogoResult.prototype.platformlogos = $util.emptyArray;
    
            /**
             * Gets the default type url for PlatformLogoResult
             * @function getTypeUrl
             * @memberof proto.PlatformLogoResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlatformLogoResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlatformLogoResult";
            };
    
            return PlatformLogoResult;
        })();
    
        proto.PlatformLogo = (function() {
    
            /**
             * Properties of a PlatformLogo.
             * @memberof proto
             * @interface IPlatformLogo
             * @property {number|null} [id] PlatformLogo id
             * @property {boolean|null} [alpha_channel] PlatformLogo alpha_channel
             * @property {boolean|null} [animated] PlatformLogo animated
             * @property {number|null} [height] PlatformLogo height
             * @property {string|null} [image_id] PlatformLogo image_id
             * @property {string|null} [url] PlatformLogo url
             * @property {number|null} [width] PlatformLogo width
             * @property {string|null} [checksum] PlatformLogo checksum
             */
    
            /**
             * Constructs a new PlatformLogo.
             * @memberof proto
             * @classdesc Represents a PlatformLogo.
             * @implements IPlatformLogo
             * @constructor
             * @param {proto.IPlatformLogo=} [properties] Properties to set
             */
            function PlatformLogo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformLogo id.
             * @member {number} id
             * @memberof proto.PlatformLogo
             * @instance
             */
            PlatformLogo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * PlatformLogo alpha_channel.
             * @member {boolean} alpha_channel
             * @memberof proto.PlatformLogo
             * @instance
             */
            PlatformLogo.prototype.alpha_channel = false;
    
            /**
             * PlatformLogo animated.
             * @member {boolean} animated
             * @memberof proto.PlatformLogo
             * @instance
             */
            PlatformLogo.prototype.animated = false;
    
            /**
             * PlatformLogo height.
             * @member {number} height
             * @memberof proto.PlatformLogo
             * @instance
             */
            PlatformLogo.prototype.height = 0;
    
            /**
             * PlatformLogo image_id.
             * @member {string} image_id
             * @memberof proto.PlatformLogo
             * @instance
             */
            PlatformLogo.prototype.image_id = "";
    
            /**
             * PlatformLogo url.
             * @member {string} url
             * @memberof proto.PlatformLogo
             * @instance
             */
            PlatformLogo.prototype.url = "";
    
            /**
             * PlatformLogo width.
             * @member {number} width
             * @memberof proto.PlatformLogo
             * @instance
             */
            PlatformLogo.prototype.width = 0;
    
            /**
             * PlatformLogo checksum.
             * @member {string} checksum
             * @memberof proto.PlatformLogo
             * @instance
             */
            PlatformLogo.prototype.checksum = "";
    
            /**
             * Gets the default type url for PlatformLogo
             * @function getTypeUrl
             * @memberof proto.PlatformLogo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlatformLogo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlatformLogo";
            };
    
            return PlatformLogo;
        })();
    
        proto.PlatformTypeResult = (function() {
    
            /**
             * Properties of a PlatformTypeResult.
             * @memberof proto
             * @interface IPlatformTypeResult
             * @property {Array.<proto.IPlatformType>|null} [platformtypes] PlatformTypeResult platformtypes
             */
    
            /**
             * Constructs a new PlatformTypeResult.
             * @memberof proto
             * @classdesc Represents a PlatformTypeResult.
             * @implements IPlatformTypeResult
             * @constructor
             * @param {proto.IPlatformTypeResult=} [properties] Properties to set
             */
            function PlatformTypeResult(properties) {
                this.platformtypes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformTypeResult platformtypes.
             * @member {Array.<proto.IPlatformType>} platformtypes
             * @memberof proto.PlatformTypeResult
             * @instance
             */
            PlatformTypeResult.prototype.platformtypes = $util.emptyArray;
    
            /**
             * Gets the default type url for PlatformTypeResult
             * @function getTypeUrl
             * @memberof proto.PlatformTypeResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlatformTypeResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlatformTypeResult";
            };
    
            return PlatformTypeResult;
        })();
    
        proto.PlatformType = (function() {
    
            /**
             * Properties of a PlatformType.
             * @memberof proto
             * @interface IPlatformType
             * @property {number|null} [id] PlatformType id
             * @property {string|null} [name] PlatformType name
             * @property {number|null} [created_at] PlatformType created_at
             * @property {number|null} [updated_at] PlatformType updated_at
             * @property {string|null} [checksum] PlatformType checksum
             */
    
            /**
             * Constructs a new PlatformType.
             * @memberof proto
             * @classdesc Represents a PlatformType.
             * @implements IPlatformType
             * @constructor
             * @param {proto.IPlatformType=} [properties] Properties to set
             */
            function PlatformType(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformType id.
             * @member {number} id
             * @memberof proto.PlatformType
             * @instance
             */
            PlatformType.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * PlatformType name.
             * @member {string} name
             * @memberof proto.PlatformType
             * @instance
             */
            PlatformType.prototype.name = "";
    
            /**
             * PlatformType created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.PlatformType
             * @instance
             */
            PlatformType.prototype.created_at = null;
    
            /**
             * PlatformType updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.PlatformType
             * @instance
             */
            PlatformType.prototype.updated_at = null;
    
            /**
             * PlatformType checksum.
             * @member {string} checksum
             * @memberof proto.PlatformType
             * @instance
             */
            PlatformType.prototype.checksum = "";
    
            /**
             * Gets the default type url for PlatformType
             * @function getTypeUrl
             * @memberof proto.PlatformType
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlatformType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlatformType";
            };
    
            return PlatformType;
        })();
    
        proto.PlatformVersionResult = (function() {
    
            /**
             * Properties of a PlatformVersionResult.
             * @memberof proto
             * @interface IPlatformVersionResult
             * @property {Array.<proto.IPlatformVersion>|null} [platformversions] PlatformVersionResult platformversions
             */
    
            /**
             * Constructs a new PlatformVersionResult.
             * @memberof proto
             * @classdesc Represents a PlatformVersionResult.
             * @implements IPlatformVersionResult
             * @constructor
             * @param {proto.IPlatformVersionResult=} [properties] Properties to set
             */
            function PlatformVersionResult(properties) {
                this.platformversions = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformVersionResult platformversions.
             * @member {Array.<proto.IPlatformVersion>} platformversions
             * @memberof proto.PlatformVersionResult
             * @instance
             */
            PlatformVersionResult.prototype.platformversions = $util.emptyArray;
    
            /**
             * Gets the default type url for PlatformVersionResult
             * @function getTypeUrl
             * @memberof proto.PlatformVersionResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlatformVersionResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlatformVersionResult";
            };
    
            return PlatformVersionResult;
        })();
    
        proto.PlatformVersion = (function() {
    
            /**
             * Properties of a PlatformVersion.
             * @memberof proto
             * @interface IPlatformVersion
             * @property {number|null} [id] PlatformVersion id
             * @property {Array.<proto.IPlatformVersionCompany>|null} [companies] PlatformVersion companies
             * @property {string|null} [connectivity] PlatformVersion connectivity
             * @property {string|null} [cpu] PlatformVersion cpu
             * @property {string|null} [graphics] PlatformVersion graphics
             * @property {proto.IPlatformVersionCompany|null} [main_manufacturer] PlatformVersion main_manufacturer
             * @property {string|null} [media] PlatformVersion media
             * @property {string|null} [memory] PlatformVersion memory
             * @property {string|null} [name] PlatformVersion name
             * @property {string|null} [os] PlatformVersion os
             * @property {string|null} [output] PlatformVersion output
             * @property {proto.IPlatformLogo|null} [platform_logo] PlatformVersion platform_logo
             * @property {Array.<proto.IPlatformVersionReleaseDate>|null} [platform_version_release_dates] PlatformVersion platform_version_release_dates
             * @property {string|null} [resolutions] PlatformVersion resolutions
             * @property {string|null} [slug] PlatformVersion slug
             * @property {string|null} [sound] PlatformVersion sound
             * @property {string|null} [storage] PlatformVersion storage
             * @property {string|null} [summary] PlatformVersion summary
             * @property {string|null} [url] PlatformVersion url
             * @property {string|null} [checksum] PlatformVersion checksum
             */
    
            /**
             * Constructs a new PlatformVersion.
             * @memberof proto
             * @classdesc Represents a PlatformVersion.
             * @implements IPlatformVersion
             * @constructor
             * @param {proto.IPlatformVersion=} [properties] Properties to set
             */
            function PlatformVersion(properties) {
                this.companies = [];
                this.platform_version_release_dates = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformVersion id.
             * @member {number} id
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * PlatformVersion companies.
             * @member {Array.<proto.IPlatformVersionCompany>} companies
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.companies = $util.emptyArray;
    
            /**
             * PlatformVersion connectivity.
             * @member {string} connectivity
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.connectivity = "";
    
            /**
             * PlatformVersion cpu.
             * @member {string} cpu
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.cpu = "";
    
            /**
             * PlatformVersion graphics.
             * @member {string} graphics
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.graphics = "";
    
            /**
             * PlatformVersion main_manufacturer.
             * @member {proto.IPlatformVersionCompany|null|undefined} main_manufacturer
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.main_manufacturer = null;
    
            /**
             * PlatformVersion media.
             * @member {string} media
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.media = "";
    
            /**
             * PlatformVersion memory.
             * @member {string} memory
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.memory = "";
    
            /**
             * PlatformVersion name.
             * @member {string} name
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.name = "";
    
            /**
             * PlatformVersion os.
             * @member {string} os
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.os = "";
    
            /**
             * PlatformVersion output.
             * @member {string} output
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.output = "";
    
            /**
             * PlatformVersion platform_logo.
             * @member {proto.IPlatformLogo|null|undefined} platform_logo
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.platform_logo = null;
    
            /**
             * PlatformVersion platform_version_release_dates.
             * @member {Array.<proto.IPlatformVersionReleaseDate>} platform_version_release_dates
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.platform_version_release_dates = $util.emptyArray;
    
            /**
             * PlatformVersion resolutions.
             * @member {string} resolutions
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.resolutions = "";
    
            /**
             * PlatformVersion slug.
             * @member {string} slug
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.slug = "";
    
            /**
             * PlatformVersion sound.
             * @member {string} sound
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.sound = "";
    
            /**
             * PlatformVersion storage.
             * @member {string} storage
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.storage = "";
    
            /**
             * PlatformVersion summary.
             * @member {string} summary
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.summary = "";
    
            /**
             * PlatformVersion url.
             * @member {string} url
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.url = "";
    
            /**
             * PlatformVersion checksum.
             * @member {string} checksum
             * @memberof proto.PlatformVersion
             * @instance
             */
            PlatformVersion.prototype.checksum = "";
    
            /**
             * Gets the default type url for PlatformVersion
             * @function getTypeUrl
             * @memberof proto.PlatformVersion
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlatformVersion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlatformVersion";
            };
    
            return PlatformVersion;
        })();
    
        proto.PlatformVersionCompanyResult = (function() {
    
            /**
             * Properties of a PlatformVersionCompanyResult.
             * @memberof proto
             * @interface IPlatformVersionCompanyResult
             * @property {Array.<proto.IPlatformVersionCompany>|null} [platformversioncompanies] PlatformVersionCompanyResult platformversioncompanies
             */
    
            /**
             * Constructs a new PlatformVersionCompanyResult.
             * @memberof proto
             * @classdesc Represents a PlatformVersionCompanyResult.
             * @implements IPlatformVersionCompanyResult
             * @constructor
             * @param {proto.IPlatformVersionCompanyResult=} [properties] Properties to set
             */
            function PlatformVersionCompanyResult(properties) {
                this.platformversioncompanies = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformVersionCompanyResult platformversioncompanies.
             * @member {Array.<proto.IPlatformVersionCompany>} platformversioncompanies
             * @memberof proto.PlatformVersionCompanyResult
             * @instance
             */
            PlatformVersionCompanyResult.prototype.platformversioncompanies = $util.emptyArray;
    
            /**
             * Gets the default type url for PlatformVersionCompanyResult
             * @function getTypeUrl
             * @memberof proto.PlatformVersionCompanyResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlatformVersionCompanyResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlatformVersionCompanyResult";
            };
    
            return PlatformVersionCompanyResult;
        })();
    
        proto.PlatformVersionCompany = (function() {
    
            /**
             * Properties of a PlatformVersionCompany.
             * @memberof proto
             * @interface IPlatformVersionCompany
             * @property {number|null} [id] PlatformVersionCompany id
             * @property {string|null} [comment] PlatformVersionCompany comment
             * @property {proto.ICompany|null} [company] PlatformVersionCompany company
             * @property {boolean|null} [developer] PlatformVersionCompany developer
             * @property {boolean|null} [manufacturer] PlatformVersionCompany manufacturer
             * @property {string|null} [checksum] PlatformVersionCompany checksum
             */
    
            /**
             * Constructs a new PlatformVersionCompany.
             * @memberof proto
             * @classdesc Represents a PlatformVersionCompany.
             * @implements IPlatformVersionCompany
             * @constructor
             * @param {proto.IPlatformVersionCompany=} [properties] Properties to set
             */
            function PlatformVersionCompany(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformVersionCompany id.
             * @member {number} id
             * @memberof proto.PlatformVersionCompany
             * @instance
             */
            PlatformVersionCompany.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * PlatformVersionCompany comment.
             * @member {string} comment
             * @memberof proto.PlatformVersionCompany
             * @instance
             */
            PlatformVersionCompany.prototype.comment = "";
    
            /**
             * PlatformVersionCompany company.
             * @member {proto.ICompany|null|undefined} company
             * @memberof proto.PlatformVersionCompany
             * @instance
             */
            PlatformVersionCompany.prototype.company = null;
    
            /**
             * PlatformVersionCompany developer.
             * @member {boolean} developer
             * @memberof proto.PlatformVersionCompany
             * @instance
             */
            PlatformVersionCompany.prototype.developer = false;
    
            /**
             * PlatformVersionCompany manufacturer.
             * @member {boolean} manufacturer
             * @memberof proto.PlatformVersionCompany
             * @instance
             */
            PlatformVersionCompany.prototype.manufacturer = false;
    
            /**
             * PlatformVersionCompany checksum.
             * @member {string} checksum
             * @memberof proto.PlatformVersionCompany
             * @instance
             */
            PlatformVersionCompany.prototype.checksum = "";
    
            /**
             * Gets the default type url for PlatformVersionCompany
             * @function getTypeUrl
             * @memberof proto.PlatformVersionCompany
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlatformVersionCompany.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlatformVersionCompany";
            };
    
            return PlatformVersionCompany;
        })();
    
        proto.PlatformVersionReleaseDateResult = (function() {
    
            /**
             * Properties of a PlatformVersionReleaseDateResult.
             * @memberof proto
             * @interface IPlatformVersionReleaseDateResult
             * @property {Array.<proto.IPlatformVersionReleaseDate>|null} [platformversionreleasedates] PlatformVersionReleaseDateResult platformversionreleasedates
             */
    
            /**
             * Constructs a new PlatformVersionReleaseDateResult.
             * @memberof proto
             * @classdesc Represents a PlatformVersionReleaseDateResult.
             * @implements IPlatformVersionReleaseDateResult
             * @constructor
             * @param {proto.IPlatformVersionReleaseDateResult=} [properties] Properties to set
             */
            function PlatformVersionReleaseDateResult(properties) {
                this.platformversionreleasedates = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformVersionReleaseDateResult platformversionreleasedates.
             * @member {Array.<proto.IPlatformVersionReleaseDate>} platformversionreleasedates
             * @memberof proto.PlatformVersionReleaseDateResult
             * @instance
             */
            PlatformVersionReleaseDateResult.prototype.platformversionreleasedates = $util.emptyArray;
    
            /**
             * Gets the default type url for PlatformVersionReleaseDateResult
             * @function getTypeUrl
             * @memberof proto.PlatformVersionReleaseDateResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlatformVersionReleaseDateResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlatformVersionReleaseDateResult";
            };
    
            return PlatformVersionReleaseDateResult;
        })();
    
        proto.PlatformVersionReleaseDate = (function() {
    
            /**
             * Properties of a PlatformVersionReleaseDate.
             * @memberof proto
             * @interface IPlatformVersionReleaseDate
             * @property {number|null} [id] PlatformVersionReleaseDate id
             * @property {proto.DateFormatChangeDateCategoryEnum|null} [category] PlatformVersionReleaseDate category
             * @property {number|null} [created_at] PlatformVersionReleaseDate created_at
             * @property {number|null} [date] PlatformVersionReleaseDate date
             * @property {string|null} [human] PlatformVersionReleaseDate human
             * @property {number|null} [m] PlatformVersionReleaseDate m
             * @property {proto.IPlatformVersion|null} [platform_version] PlatformVersionReleaseDate platform_version
             * @property {proto.RegionRegionEnum|null} [region] PlatformVersionReleaseDate region
             * @property {number|null} [updated_at] PlatformVersionReleaseDate updated_at
             * @property {number|null} [y] PlatformVersionReleaseDate y
             * @property {string|null} [checksum] PlatformVersionReleaseDate checksum
             * @property {proto.IDateFormat|null} [date_format] PlatformVersionReleaseDate date_format
             * @property {proto.IReleaseDateRegion|null} [release_region] PlatformVersionReleaseDate release_region
             */
    
            /**
             * Constructs a new PlatformVersionReleaseDate.
             * @memberof proto
             * @classdesc Represents a PlatformVersionReleaseDate.
             * @implements IPlatformVersionReleaseDate
             * @constructor
             * @param {proto.IPlatformVersionReleaseDate=} [properties] Properties to set
             */
            function PlatformVersionReleaseDate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformVersionReleaseDate id.
             * @member {number} id
             * @memberof proto.PlatformVersionReleaseDate
             * @instance
             */
            PlatformVersionReleaseDate.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * PlatformVersionReleaseDate category.
             * @member {proto.DateFormatChangeDateCategoryEnum} category
             * @memberof proto.PlatformVersionReleaseDate
             * @instance
             */
            PlatformVersionReleaseDate.prototype.category = 0;
    
            /**
             * PlatformVersionReleaseDate created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.PlatformVersionReleaseDate
             * @instance
             */
            PlatformVersionReleaseDate.prototype.created_at = null;
    
            /**
             * PlatformVersionReleaseDate date.
             * @member {number|null|undefined} date
             * @memberof proto.PlatformVersionReleaseDate
             * @instance
             */
            PlatformVersionReleaseDate.prototype.date = null;
    
            /**
             * PlatformVersionReleaseDate human.
             * @member {string} human
             * @memberof proto.PlatformVersionReleaseDate
             * @instance
             */
            PlatformVersionReleaseDate.prototype.human = "";
    
            /**
             * PlatformVersionReleaseDate m.
             * @member {number} m
             * @memberof proto.PlatformVersionReleaseDate
             * @instance
             */
            PlatformVersionReleaseDate.prototype.m = 0;
    
            /**
             * PlatformVersionReleaseDate platform_version.
             * @member {proto.IPlatformVersion|null|undefined} platform_version
             * @memberof proto.PlatformVersionReleaseDate
             * @instance
             */
            PlatformVersionReleaseDate.prototype.platform_version = null;
    
            /**
             * PlatformVersionReleaseDate region.
             * @member {proto.RegionRegionEnum} region
             * @memberof proto.PlatformVersionReleaseDate
             * @instance
             */
            PlatformVersionReleaseDate.prototype.region = 0;
    
            /**
             * PlatformVersionReleaseDate updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.PlatformVersionReleaseDate
             * @instance
             */
            PlatformVersionReleaseDate.prototype.updated_at = null;
    
            /**
             * PlatformVersionReleaseDate y.
             * @member {number} y
             * @memberof proto.PlatformVersionReleaseDate
             * @instance
             */
            PlatformVersionReleaseDate.prototype.y = 0;
    
            /**
             * PlatformVersionReleaseDate checksum.
             * @member {string} checksum
             * @memberof proto.PlatformVersionReleaseDate
             * @instance
             */
            PlatformVersionReleaseDate.prototype.checksum = "";
    
            /**
             * PlatformVersionReleaseDate date_format.
             * @member {proto.IDateFormat|null|undefined} date_format
             * @memberof proto.PlatformVersionReleaseDate
             * @instance
             */
            PlatformVersionReleaseDate.prototype.date_format = null;
    
            /**
             * PlatformVersionReleaseDate release_region.
             * @member {proto.IReleaseDateRegion|null|undefined} release_region
             * @memberof proto.PlatformVersionReleaseDate
             * @instance
             */
            PlatformVersionReleaseDate.prototype.release_region = null;
    
            /**
             * Gets the default type url for PlatformVersionReleaseDate
             * @function getTypeUrl
             * @memberof proto.PlatformVersionReleaseDate
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlatformVersionReleaseDate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlatformVersionReleaseDate";
            };
    
            return PlatformVersionReleaseDate;
        })();
    
        /**
         * RegionRegionEnum enum.
         * @name proto.RegionRegionEnum
         * @enum {number}
         * @property {number} REGION_REGION_NULL=0 REGION_REGION_NULL value
         * @property {number} EUROPE=1 EUROPE value
         * @property {number} NORTH_AMERICA=2 NORTH_AMERICA value
         * @property {number} AUSTRALIA=3 AUSTRALIA value
         * @property {number} NEW_ZEALAND=4 NEW_ZEALAND value
         * @property {number} JAPAN=5 JAPAN value
         * @property {number} CHINA=6 CHINA value
         * @property {number} ASIA=7 ASIA value
         * @property {number} WORLDWIDE=8 WORLDWIDE value
         * @property {number} KOREA=9 KOREA value
         * @property {number} BRAZIL=10 BRAZIL value
         */
        proto.RegionRegionEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "REGION_REGION_NULL"] = 0;
            values[valuesById[1] = "EUROPE"] = 1;
            values[valuesById[2] = "NORTH_AMERICA"] = 2;
            values[valuesById[3] = "AUSTRALIA"] = 3;
            values[valuesById[4] = "NEW_ZEALAND"] = 4;
            values[valuesById[5] = "JAPAN"] = 5;
            values[valuesById[6] = "CHINA"] = 6;
            values[valuesById[7] = "ASIA"] = 7;
            values[valuesById[8] = "WORLDWIDE"] = 8;
            values[valuesById[9] = "KOREA"] = 9;
            values[valuesById[10] = "BRAZIL"] = 10;
            return values;
        })();
    
        proto.PlatformWebsiteResult = (function() {
    
            /**
             * Properties of a PlatformWebsiteResult.
             * @memberof proto
             * @interface IPlatformWebsiteResult
             * @property {Array.<proto.IPlatformWebsite>|null} [platformwebsites] PlatformWebsiteResult platformwebsites
             */
    
            /**
             * Constructs a new PlatformWebsiteResult.
             * @memberof proto
             * @classdesc Represents a PlatformWebsiteResult.
             * @implements IPlatformWebsiteResult
             * @constructor
             * @param {proto.IPlatformWebsiteResult=} [properties] Properties to set
             */
            function PlatformWebsiteResult(properties) {
                this.platformwebsites = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformWebsiteResult platformwebsites.
             * @member {Array.<proto.IPlatformWebsite>} platformwebsites
             * @memberof proto.PlatformWebsiteResult
             * @instance
             */
            PlatformWebsiteResult.prototype.platformwebsites = $util.emptyArray;
    
            /**
             * Gets the default type url for PlatformWebsiteResult
             * @function getTypeUrl
             * @memberof proto.PlatformWebsiteResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlatformWebsiteResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlatformWebsiteResult";
            };
    
            return PlatformWebsiteResult;
        })();
    
        proto.PlatformWebsite = (function() {
    
            /**
             * Properties of a PlatformWebsite.
             * @memberof proto
             * @interface IPlatformWebsite
             * @property {number|null} [id] PlatformWebsite id
             * @property {proto.WebsiteCategoryEnum|null} [category] PlatformWebsite category
             * @property {boolean|null} [trusted] PlatformWebsite trusted
             * @property {string|null} [url] PlatformWebsite url
             * @property {string|null} [checksum] PlatformWebsite checksum
             */
    
            /**
             * Constructs a new PlatformWebsite.
             * @memberof proto
             * @classdesc Represents a PlatformWebsite.
             * @implements IPlatformWebsite
             * @constructor
             * @param {proto.IPlatformWebsite=} [properties] Properties to set
             */
            function PlatformWebsite(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlatformWebsite id.
             * @member {number} id
             * @memberof proto.PlatformWebsite
             * @instance
             */
            PlatformWebsite.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * PlatformWebsite category.
             * @member {proto.WebsiteCategoryEnum} category
             * @memberof proto.PlatformWebsite
             * @instance
             */
            PlatformWebsite.prototype.category = 0;
    
            /**
             * PlatformWebsite trusted.
             * @member {boolean} trusted
             * @memberof proto.PlatformWebsite
             * @instance
             */
            PlatformWebsite.prototype.trusted = false;
    
            /**
             * PlatformWebsite url.
             * @member {string} url
             * @memberof proto.PlatformWebsite
             * @instance
             */
            PlatformWebsite.prototype.url = "";
    
            /**
             * PlatformWebsite checksum.
             * @member {string} checksum
             * @memberof proto.PlatformWebsite
             * @instance
             */
            PlatformWebsite.prototype.checksum = "";
    
            /**
             * Gets the default type url for PlatformWebsite
             * @function getTypeUrl
             * @memberof proto.PlatformWebsite
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlatformWebsite.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlatformWebsite";
            };
    
            return PlatformWebsite;
        })();
    
        proto.PlayerPerspectiveResult = (function() {
    
            /**
             * Properties of a PlayerPerspectiveResult.
             * @memberof proto
             * @interface IPlayerPerspectiveResult
             * @property {Array.<proto.IPlayerPerspective>|null} [playerperspectives] PlayerPerspectiveResult playerperspectives
             */
    
            /**
             * Constructs a new PlayerPerspectiveResult.
             * @memberof proto
             * @classdesc Represents a PlayerPerspectiveResult.
             * @implements IPlayerPerspectiveResult
             * @constructor
             * @param {proto.IPlayerPerspectiveResult=} [properties] Properties to set
             */
            function PlayerPerspectiveResult(properties) {
                this.playerperspectives = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlayerPerspectiveResult playerperspectives.
             * @member {Array.<proto.IPlayerPerspective>} playerperspectives
             * @memberof proto.PlayerPerspectiveResult
             * @instance
             */
            PlayerPerspectiveResult.prototype.playerperspectives = $util.emptyArray;
    
            /**
             * Gets the default type url for PlayerPerspectiveResult
             * @function getTypeUrl
             * @memberof proto.PlayerPerspectiveResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerPerspectiveResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlayerPerspectiveResult";
            };
    
            return PlayerPerspectiveResult;
        })();
    
        proto.PlayerPerspective = (function() {
    
            /**
             * Properties of a PlayerPerspective.
             * @memberof proto
             * @interface IPlayerPerspective
             * @property {number|null} [id] PlayerPerspective id
             * @property {number|null} [created_at] PlayerPerspective created_at
             * @property {string|null} [name] PlayerPerspective name
             * @property {string|null} [slug] PlayerPerspective slug
             * @property {number|null} [updated_at] PlayerPerspective updated_at
             * @property {string|null} [url] PlayerPerspective url
             * @property {string|null} [checksum] PlayerPerspective checksum
             */
    
            /**
             * Constructs a new PlayerPerspective.
             * @memberof proto
             * @classdesc Represents a PlayerPerspective.
             * @implements IPlayerPerspective
             * @constructor
             * @param {proto.IPlayerPerspective=} [properties] Properties to set
             */
            function PlayerPerspective(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PlayerPerspective id.
             * @member {number} id
             * @memberof proto.PlayerPerspective
             * @instance
             */
            PlayerPerspective.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * PlayerPerspective created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.PlayerPerspective
             * @instance
             */
            PlayerPerspective.prototype.created_at = null;
    
            /**
             * PlayerPerspective name.
             * @member {string} name
             * @memberof proto.PlayerPerspective
             * @instance
             */
            PlayerPerspective.prototype.name = "";
    
            /**
             * PlayerPerspective slug.
             * @member {string} slug
             * @memberof proto.PlayerPerspective
             * @instance
             */
            PlayerPerspective.prototype.slug = "";
    
            /**
             * PlayerPerspective updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.PlayerPerspective
             * @instance
             */
            PlayerPerspective.prototype.updated_at = null;
    
            /**
             * PlayerPerspective url.
             * @member {string} url
             * @memberof proto.PlayerPerspective
             * @instance
             */
            PlayerPerspective.prototype.url = "";
    
            /**
             * PlayerPerspective checksum.
             * @member {string} checksum
             * @memberof proto.PlayerPerspective
             * @instance
             */
            PlayerPerspective.prototype.checksum = "";
    
            /**
             * Gets the default type url for PlayerPerspective
             * @function getTypeUrl
             * @memberof proto.PlayerPerspective
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PlayerPerspective.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PlayerPerspective";
            };
    
            return PlayerPerspective;
        })();
    
        proto.PopularityPrimitiveResult = (function() {
    
            /**
             * Properties of a PopularityPrimitiveResult.
             * @memberof proto
             * @interface IPopularityPrimitiveResult
             * @property {Array.<proto.IPopularityPrimitive>|null} [popularityprimitives] PopularityPrimitiveResult popularityprimitives
             */
    
            /**
             * Constructs a new PopularityPrimitiveResult.
             * @memberof proto
             * @classdesc Represents a PopularityPrimitiveResult.
             * @implements IPopularityPrimitiveResult
             * @constructor
             * @param {proto.IPopularityPrimitiveResult=} [properties] Properties to set
             */
            function PopularityPrimitiveResult(properties) {
                this.popularityprimitives = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PopularityPrimitiveResult popularityprimitives.
             * @member {Array.<proto.IPopularityPrimitive>} popularityprimitives
             * @memberof proto.PopularityPrimitiveResult
             * @instance
             */
            PopularityPrimitiveResult.prototype.popularityprimitives = $util.emptyArray;
    
            /**
             * Gets the default type url for PopularityPrimitiveResult
             * @function getTypeUrl
             * @memberof proto.PopularityPrimitiveResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PopularityPrimitiveResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PopularityPrimitiveResult";
            };
    
            return PopularityPrimitiveResult;
        })();
    
        proto.PopularityPrimitive = (function() {
    
            /**
             * Properties of a PopularityPrimitive.
             * @memberof proto
             * @interface IPopularityPrimitive
             * @property {number|null} [id] PopularityPrimitive id
             * @property {number|null} [game_id] PopularityPrimitive game_id
             * @property {proto.IPopularityType|null} [popularity_type] PopularityPrimitive popularity_type
             * @property {proto.PopularitySourcePopularitySourceEnum|null} [popularity_source] PopularityPrimitive popularity_source
             * @property {number|null} [value] PopularityPrimitive value
             * @property {number|null} [calculated_at] PopularityPrimitive calculated_at
             * @property {number|null} [created_at] PopularityPrimitive created_at
             * @property {number|null} [updated_at] PopularityPrimitive updated_at
             * @property {string|null} [checksum] PopularityPrimitive checksum
             * @property {proto.IExternalGameSource|null} [external_popularity_source] PopularityPrimitive external_popularity_source
             */
    
            /**
             * Constructs a new PopularityPrimitive.
             * @memberof proto
             * @classdesc Represents a PopularityPrimitive.
             * @implements IPopularityPrimitive
             * @constructor
             * @param {proto.IPopularityPrimitive=} [properties] Properties to set
             */
            function PopularityPrimitive(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PopularityPrimitive id.
             * @member {number} id
             * @memberof proto.PopularityPrimitive
             * @instance
             */
            PopularityPrimitive.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * PopularityPrimitive game_id.
             * @member {number} game_id
             * @memberof proto.PopularityPrimitive
             * @instance
             */
            PopularityPrimitive.prototype.game_id = 0;
    
            /**
             * PopularityPrimitive popularity_type.
             * @member {proto.IPopularityType|null|undefined} popularity_type
             * @memberof proto.PopularityPrimitive
             * @instance
             */
            PopularityPrimitive.prototype.popularity_type = null;
    
            /**
             * PopularityPrimitive popularity_source.
             * @member {proto.PopularitySourcePopularitySourceEnum} popularity_source
             * @memberof proto.PopularityPrimitive
             * @instance
             */
            PopularityPrimitive.prototype.popularity_source = 0;
    
            /**
             * PopularityPrimitive value.
             * @member {number} value
             * @memberof proto.PopularityPrimitive
             * @instance
             */
            PopularityPrimitive.prototype.value = 0;
    
            /**
             * PopularityPrimitive calculated_at.
             * @member {number|null|undefined} calculated_at
             * @memberof proto.PopularityPrimitive
             * @instance
             */
            PopularityPrimitive.prototype.calculated_at = null;
    
            /**
             * PopularityPrimitive created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.PopularityPrimitive
             * @instance
             */
            PopularityPrimitive.prototype.created_at = null;
    
            /**
             * PopularityPrimitive updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.PopularityPrimitive
             * @instance
             */
            PopularityPrimitive.prototype.updated_at = null;
    
            /**
             * PopularityPrimitive checksum.
             * @member {string} checksum
             * @memberof proto.PopularityPrimitive
             * @instance
             */
            PopularityPrimitive.prototype.checksum = "";
    
            /**
             * PopularityPrimitive external_popularity_source.
             * @member {proto.IExternalGameSource|null|undefined} external_popularity_source
             * @memberof proto.PopularityPrimitive
             * @instance
             */
            PopularityPrimitive.prototype.external_popularity_source = null;
    
            /**
             * Gets the default type url for PopularityPrimitive
             * @function getTypeUrl
             * @memberof proto.PopularityPrimitive
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PopularityPrimitive.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PopularityPrimitive";
            };
    
            return PopularityPrimitive;
        })();
    
        /**
         * PopularitySourcePopularitySourceEnum enum.
         * @name proto.PopularitySourcePopularitySourceEnum
         * @enum {number}
         * @property {number} POPULARITYSOURCE_POPULARITY_SOURCE_NULL=0 POPULARITYSOURCE_POPULARITY_SOURCE_NULL value
         * @property {number} IGDB=121 IGDB value
         */
        proto.PopularitySourcePopularitySourceEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "POPULARITYSOURCE_POPULARITY_SOURCE_NULL"] = 0;
            values[valuesById[121] = "IGDB"] = 121;
            return values;
        })();
    
        proto.PopularityTypeResult = (function() {
    
            /**
             * Properties of a PopularityTypeResult.
             * @memberof proto
             * @interface IPopularityTypeResult
             * @property {Array.<proto.IPopularityType>|null} [popularitytypes] PopularityTypeResult popularitytypes
             */
    
            /**
             * Constructs a new PopularityTypeResult.
             * @memberof proto
             * @classdesc Represents a PopularityTypeResult.
             * @implements IPopularityTypeResult
             * @constructor
             * @param {proto.IPopularityTypeResult=} [properties] Properties to set
             */
            function PopularityTypeResult(properties) {
                this.popularitytypes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PopularityTypeResult popularitytypes.
             * @member {Array.<proto.IPopularityType>} popularitytypes
             * @memberof proto.PopularityTypeResult
             * @instance
             */
            PopularityTypeResult.prototype.popularitytypes = $util.emptyArray;
    
            /**
             * Gets the default type url for PopularityTypeResult
             * @function getTypeUrl
             * @memberof proto.PopularityTypeResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PopularityTypeResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PopularityTypeResult";
            };
    
            return PopularityTypeResult;
        })();
    
        proto.PopularityType = (function() {
    
            /**
             * Properties of a PopularityType.
             * @memberof proto
             * @interface IPopularityType
             * @property {number|null} [id] PopularityType id
             * @property {proto.PopularitySourcePopularitySourceEnum|null} [popularity_source] PopularityType popularity_source
             * @property {string|null} [name] PopularityType name
             * @property {number|null} [created_at] PopularityType created_at
             * @property {number|null} [updated_at] PopularityType updated_at
             * @property {string|null} [checksum] PopularityType checksum
             * @property {proto.IExternalGameSource|null} [external_popularity_source] PopularityType external_popularity_source
             */
    
            /**
             * Constructs a new PopularityType.
             * @memberof proto
             * @classdesc Represents a PopularityType.
             * @implements IPopularityType
             * @constructor
             * @param {proto.IPopularityType=} [properties] Properties to set
             */
            function PopularityType(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * PopularityType id.
             * @member {number} id
             * @memberof proto.PopularityType
             * @instance
             */
            PopularityType.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * PopularityType popularity_source.
             * @member {proto.PopularitySourcePopularitySourceEnum} popularity_source
             * @memberof proto.PopularityType
             * @instance
             */
            PopularityType.prototype.popularity_source = 0;
    
            /**
             * PopularityType name.
             * @member {string} name
             * @memberof proto.PopularityType
             * @instance
             */
            PopularityType.prototype.name = "";
    
            /**
             * PopularityType created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.PopularityType
             * @instance
             */
            PopularityType.prototype.created_at = null;
    
            /**
             * PopularityType updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.PopularityType
             * @instance
             */
            PopularityType.prototype.updated_at = null;
    
            /**
             * PopularityType checksum.
             * @member {string} checksum
             * @memberof proto.PopularityType
             * @instance
             */
            PopularityType.prototype.checksum = "";
    
            /**
             * PopularityType external_popularity_source.
             * @member {proto.IExternalGameSource|null|undefined} external_popularity_source
             * @memberof proto.PopularityType
             * @instance
             */
            PopularityType.prototype.external_popularity_source = null;
    
            /**
             * Gets the default type url for PopularityType
             * @function getTypeUrl
             * @memberof proto.PopularityType
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PopularityType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.PopularityType";
            };
    
            return PopularityType;
        })();
    
        proto.RegionResult = (function() {
    
            /**
             * Properties of a RegionResult.
             * @memberof proto
             * @interface IRegionResult
             * @property {Array.<proto.IRegion>|null} [regions] RegionResult regions
             */
    
            /**
             * Constructs a new RegionResult.
             * @memberof proto
             * @classdesc Represents a RegionResult.
             * @implements IRegionResult
             * @constructor
             * @param {proto.IRegionResult=} [properties] Properties to set
             */
            function RegionResult(properties) {
                this.regions = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * RegionResult regions.
             * @member {Array.<proto.IRegion>} regions
             * @memberof proto.RegionResult
             * @instance
             */
            RegionResult.prototype.regions = $util.emptyArray;
    
            /**
             * Gets the default type url for RegionResult
             * @function getTypeUrl
             * @memberof proto.RegionResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RegionResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.RegionResult";
            };
    
            return RegionResult;
        })();
    
        proto.Region = (function() {
    
            /**
             * Properties of a Region.
             * @memberof proto
             * @interface IRegion
             * @property {number|null} [id] Region id
             * @property {string|null} [name] Region name
             * @property {string|null} [category] Region category
             * @property {string|null} [identifier] Region identifier
             * @property {number|null} [created_at] Region created_at
             * @property {number|null} [updated_at] Region updated_at
             * @property {string|null} [checksum] Region checksum
             */
    
            /**
             * Constructs a new Region.
             * @memberof proto
             * @classdesc Represents a Region.
             * @implements IRegion
             * @constructor
             * @param {proto.IRegion=} [properties] Properties to set
             */
            function Region(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Region id.
             * @member {number} id
             * @memberof proto.Region
             * @instance
             */
            Region.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Region name.
             * @member {string} name
             * @memberof proto.Region
             * @instance
             */
            Region.prototype.name = "";
    
            /**
             * Region category.
             * @member {string} category
             * @memberof proto.Region
             * @instance
             */
            Region.prototype.category = "";
    
            /**
             * Region identifier.
             * @member {string} identifier
             * @memberof proto.Region
             * @instance
             */
            Region.prototype.identifier = "";
    
            /**
             * Region created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.Region
             * @instance
             */
            Region.prototype.created_at = null;
    
            /**
             * Region updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.Region
             * @instance
             */
            Region.prototype.updated_at = null;
    
            /**
             * Region checksum.
             * @member {string} checksum
             * @memberof proto.Region
             * @instance
             */
            Region.prototype.checksum = "";
    
            /**
             * Gets the default type url for Region
             * @function getTypeUrl
             * @memberof proto.Region
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Region.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Region";
            };
    
            return Region;
        })();
    
        proto.ReleaseDateResult = (function() {
    
            /**
             * Properties of a ReleaseDateResult.
             * @memberof proto
             * @interface IReleaseDateResult
             * @property {Array.<proto.IReleaseDate>|null} [releasedates] ReleaseDateResult releasedates
             */
    
            /**
             * Constructs a new ReleaseDateResult.
             * @memberof proto
             * @classdesc Represents a ReleaseDateResult.
             * @implements IReleaseDateResult
             * @constructor
             * @param {proto.IReleaseDateResult=} [properties] Properties to set
             */
            function ReleaseDateResult(properties) {
                this.releasedates = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ReleaseDateResult releasedates.
             * @member {Array.<proto.IReleaseDate>} releasedates
             * @memberof proto.ReleaseDateResult
             * @instance
             */
            ReleaseDateResult.prototype.releasedates = $util.emptyArray;
    
            /**
             * Gets the default type url for ReleaseDateResult
             * @function getTypeUrl
             * @memberof proto.ReleaseDateResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReleaseDateResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ReleaseDateResult";
            };
    
            return ReleaseDateResult;
        })();
    
        proto.ReleaseDate = (function() {
    
            /**
             * Properties of a ReleaseDate.
             * @memberof proto
             * @interface IReleaseDate
             * @property {number|null} [id] ReleaseDate id
             * @property {proto.DateFormatChangeDateCategoryEnum|null} [category] ReleaseDate category
             * @property {number|null} [created_at] ReleaseDate created_at
             * @property {number|null} [date] ReleaseDate date
             * @property {proto.IGame|null} [game] ReleaseDate game
             * @property {string|null} [human] ReleaseDate human
             * @property {number|null} [m] ReleaseDate m
             * @property {proto.IPlatform|null} [platform] ReleaseDate platform
             * @property {proto.RegionRegionEnum|null} [region] ReleaseDate region
             * @property {number|null} [updated_at] ReleaseDate updated_at
             * @property {number|null} [y] ReleaseDate y
             * @property {string|null} [checksum] ReleaseDate checksum
             * @property {proto.IReleaseDateStatus|null} [status] ReleaseDate status
             * @property {proto.IDateFormat|null} [date_format] ReleaseDate date_format
             * @property {proto.IReleaseDateRegion|null} [release_region] ReleaseDate release_region
             */
    
            /**
             * Constructs a new ReleaseDate.
             * @memberof proto
             * @classdesc Represents a ReleaseDate.
             * @implements IReleaseDate
             * @constructor
             * @param {proto.IReleaseDate=} [properties] Properties to set
             */
            function ReleaseDate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ReleaseDate id.
             * @member {number} id
             * @memberof proto.ReleaseDate
             * @instance
             */
            ReleaseDate.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * ReleaseDate category.
             * @member {proto.DateFormatChangeDateCategoryEnum} category
             * @memberof proto.ReleaseDate
             * @instance
             */
            ReleaseDate.prototype.category = 0;
    
            /**
             * ReleaseDate created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.ReleaseDate
             * @instance
             */
            ReleaseDate.prototype.created_at = null;
    
            /**
             * ReleaseDate date.
             * @member {number|null|undefined} date
             * @memberof proto.ReleaseDate
             * @instance
             */
            ReleaseDate.prototype.date = null;
    
            /**
             * ReleaseDate game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.ReleaseDate
             * @instance
             */
            ReleaseDate.prototype.game = null;
    
            /**
             * ReleaseDate human.
             * @member {string} human
             * @memberof proto.ReleaseDate
             * @instance
             */
            ReleaseDate.prototype.human = "";
    
            /**
             * ReleaseDate m.
             * @member {number} m
             * @memberof proto.ReleaseDate
             * @instance
             */
            ReleaseDate.prototype.m = 0;
    
            /**
             * ReleaseDate platform.
             * @member {proto.IPlatform|null|undefined} platform
             * @memberof proto.ReleaseDate
             * @instance
             */
            ReleaseDate.prototype.platform = null;
    
            /**
             * ReleaseDate region.
             * @member {proto.RegionRegionEnum} region
             * @memberof proto.ReleaseDate
             * @instance
             */
            ReleaseDate.prototype.region = 0;
    
            /**
             * ReleaseDate updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.ReleaseDate
             * @instance
             */
            ReleaseDate.prototype.updated_at = null;
    
            /**
             * ReleaseDate y.
             * @member {number} y
             * @memberof proto.ReleaseDate
             * @instance
             */
            ReleaseDate.prototype.y = 0;
    
            /**
             * ReleaseDate checksum.
             * @member {string} checksum
             * @memberof proto.ReleaseDate
             * @instance
             */
            ReleaseDate.prototype.checksum = "";
    
            /**
             * ReleaseDate status.
             * @member {proto.IReleaseDateStatus|null|undefined} status
             * @memberof proto.ReleaseDate
             * @instance
             */
            ReleaseDate.prototype.status = null;
    
            /**
             * ReleaseDate date_format.
             * @member {proto.IDateFormat|null|undefined} date_format
             * @memberof proto.ReleaseDate
             * @instance
             */
            ReleaseDate.prototype.date_format = null;
    
            /**
             * ReleaseDate release_region.
             * @member {proto.IReleaseDateRegion|null|undefined} release_region
             * @memberof proto.ReleaseDate
             * @instance
             */
            ReleaseDate.prototype.release_region = null;
    
            /**
             * Gets the default type url for ReleaseDate
             * @function getTypeUrl
             * @memberof proto.ReleaseDate
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReleaseDate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ReleaseDate";
            };
    
            return ReleaseDate;
        })();
    
        proto.ReleaseDateRegionResult = (function() {
    
            /**
             * Properties of a ReleaseDateRegionResult.
             * @memberof proto
             * @interface IReleaseDateRegionResult
             * @property {Array.<proto.IReleaseDateRegion>|null} [releasedateregions] ReleaseDateRegionResult releasedateregions
             */
    
            /**
             * Constructs a new ReleaseDateRegionResult.
             * @memberof proto
             * @classdesc Represents a ReleaseDateRegionResult.
             * @implements IReleaseDateRegionResult
             * @constructor
             * @param {proto.IReleaseDateRegionResult=} [properties] Properties to set
             */
            function ReleaseDateRegionResult(properties) {
                this.releasedateregions = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ReleaseDateRegionResult releasedateregions.
             * @member {Array.<proto.IReleaseDateRegion>} releasedateregions
             * @memberof proto.ReleaseDateRegionResult
             * @instance
             */
            ReleaseDateRegionResult.prototype.releasedateregions = $util.emptyArray;
    
            /**
             * Gets the default type url for ReleaseDateRegionResult
             * @function getTypeUrl
             * @memberof proto.ReleaseDateRegionResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReleaseDateRegionResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ReleaseDateRegionResult";
            };
    
            return ReleaseDateRegionResult;
        })();
    
        proto.ReleaseDateRegion = (function() {
    
            /**
             * Properties of a ReleaseDateRegion.
             * @memberof proto
             * @interface IReleaseDateRegion
             * @property {number|null} [id] ReleaseDateRegion id
             * @property {string|null} [region] ReleaseDateRegion region
             * @property {number|null} [created_at] ReleaseDateRegion created_at
             * @property {number|null} [updated_at] ReleaseDateRegion updated_at
             * @property {string|null} [checksum] ReleaseDateRegion checksum
             */
    
            /**
             * Constructs a new ReleaseDateRegion.
             * @memberof proto
             * @classdesc Represents a ReleaseDateRegion.
             * @implements IReleaseDateRegion
             * @constructor
             * @param {proto.IReleaseDateRegion=} [properties] Properties to set
             */
            function ReleaseDateRegion(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ReleaseDateRegion id.
             * @member {number} id
             * @memberof proto.ReleaseDateRegion
             * @instance
             */
            ReleaseDateRegion.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * ReleaseDateRegion region.
             * @member {string} region
             * @memberof proto.ReleaseDateRegion
             * @instance
             */
            ReleaseDateRegion.prototype.region = "";
    
            /**
             * ReleaseDateRegion created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.ReleaseDateRegion
             * @instance
             */
            ReleaseDateRegion.prototype.created_at = null;
    
            /**
             * ReleaseDateRegion updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.ReleaseDateRegion
             * @instance
             */
            ReleaseDateRegion.prototype.updated_at = null;
    
            /**
             * ReleaseDateRegion checksum.
             * @member {string} checksum
             * @memberof proto.ReleaseDateRegion
             * @instance
             */
            ReleaseDateRegion.prototype.checksum = "";
    
            /**
             * Gets the default type url for ReleaseDateRegion
             * @function getTypeUrl
             * @memberof proto.ReleaseDateRegion
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReleaseDateRegion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ReleaseDateRegion";
            };
    
            return ReleaseDateRegion;
        })();
    
        proto.ReleaseDateStatusResult = (function() {
    
            /**
             * Properties of a ReleaseDateStatusResult.
             * @memberof proto
             * @interface IReleaseDateStatusResult
             * @property {Array.<proto.IReleaseDateStatus>|null} [releasedatestatuses] ReleaseDateStatusResult releasedatestatuses
             */
    
            /**
             * Constructs a new ReleaseDateStatusResult.
             * @memberof proto
             * @classdesc Represents a ReleaseDateStatusResult.
             * @implements IReleaseDateStatusResult
             * @constructor
             * @param {proto.IReleaseDateStatusResult=} [properties] Properties to set
             */
            function ReleaseDateStatusResult(properties) {
                this.releasedatestatuses = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ReleaseDateStatusResult releasedatestatuses.
             * @member {Array.<proto.IReleaseDateStatus>} releasedatestatuses
             * @memberof proto.ReleaseDateStatusResult
             * @instance
             */
            ReleaseDateStatusResult.prototype.releasedatestatuses = $util.emptyArray;
    
            /**
             * Gets the default type url for ReleaseDateStatusResult
             * @function getTypeUrl
             * @memberof proto.ReleaseDateStatusResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReleaseDateStatusResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ReleaseDateStatusResult";
            };
    
            return ReleaseDateStatusResult;
        })();
    
        proto.ReleaseDateStatus = (function() {
    
            /**
             * Properties of a ReleaseDateStatus.
             * @memberof proto
             * @interface IReleaseDateStatus
             * @property {number|null} [id] ReleaseDateStatus id
             * @property {string|null} [name] ReleaseDateStatus name
             * @property {string|null} [description] ReleaseDateStatus description
             * @property {number|null} [created_at] ReleaseDateStatus created_at
             * @property {number|null} [updated_at] ReleaseDateStatus updated_at
             * @property {string|null} [checksum] ReleaseDateStatus checksum
             */
    
            /**
             * Constructs a new ReleaseDateStatus.
             * @memberof proto
             * @classdesc Represents a ReleaseDateStatus.
             * @implements IReleaseDateStatus
             * @constructor
             * @param {proto.IReleaseDateStatus=} [properties] Properties to set
             */
            function ReleaseDateStatus(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ReleaseDateStatus id.
             * @member {number} id
             * @memberof proto.ReleaseDateStatus
             * @instance
             */
            ReleaseDateStatus.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * ReleaseDateStatus name.
             * @member {string} name
             * @memberof proto.ReleaseDateStatus
             * @instance
             */
            ReleaseDateStatus.prototype.name = "";
    
            /**
             * ReleaseDateStatus description.
             * @member {string} description
             * @memberof proto.ReleaseDateStatus
             * @instance
             */
            ReleaseDateStatus.prototype.description = "";
    
            /**
             * ReleaseDateStatus created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.ReleaseDateStatus
             * @instance
             */
            ReleaseDateStatus.prototype.created_at = null;
    
            /**
             * ReleaseDateStatus updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.ReleaseDateStatus
             * @instance
             */
            ReleaseDateStatus.prototype.updated_at = null;
    
            /**
             * ReleaseDateStatus checksum.
             * @member {string} checksum
             * @memberof proto.ReleaseDateStatus
             * @instance
             */
            ReleaseDateStatus.prototype.checksum = "";
    
            /**
             * Gets the default type url for ReleaseDateStatus
             * @function getTypeUrl
             * @memberof proto.ReleaseDateStatus
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ReleaseDateStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ReleaseDateStatus";
            };
    
            return ReleaseDateStatus;
        })();
    
        proto.ScreenshotResult = (function() {
    
            /**
             * Properties of a ScreenshotResult.
             * @memberof proto
             * @interface IScreenshotResult
             * @property {Array.<proto.IScreenshot>|null} [screenshots] ScreenshotResult screenshots
             */
    
            /**
             * Constructs a new ScreenshotResult.
             * @memberof proto
             * @classdesc Represents a ScreenshotResult.
             * @implements IScreenshotResult
             * @constructor
             * @param {proto.IScreenshotResult=} [properties] Properties to set
             */
            function ScreenshotResult(properties) {
                this.screenshots = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ScreenshotResult screenshots.
             * @member {Array.<proto.IScreenshot>} screenshots
             * @memberof proto.ScreenshotResult
             * @instance
             */
            ScreenshotResult.prototype.screenshots = $util.emptyArray;
    
            /**
             * Gets the default type url for ScreenshotResult
             * @function getTypeUrl
             * @memberof proto.ScreenshotResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ScreenshotResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ScreenshotResult";
            };
    
            return ScreenshotResult;
        })();
    
        proto.Screenshot = (function() {
    
            /**
             * Properties of a Screenshot.
             * @memberof proto
             * @interface IScreenshot
             * @property {number|null} [id] Screenshot id
             * @property {boolean|null} [alpha_channel] Screenshot alpha_channel
             * @property {boolean|null} [animated] Screenshot animated
             * @property {proto.IGame|null} [game] Screenshot game
             * @property {number|null} [height] Screenshot height
             * @property {string|null} [image_id] Screenshot image_id
             * @property {string|null} [url] Screenshot url
             * @property {number|null} [width] Screenshot width
             * @property {string|null} [checksum] Screenshot checksum
             */
    
            /**
             * Constructs a new Screenshot.
             * @memberof proto
             * @classdesc Represents a Screenshot.
             * @implements IScreenshot
             * @constructor
             * @param {proto.IScreenshot=} [properties] Properties to set
             */
            function Screenshot(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Screenshot id.
             * @member {number} id
             * @memberof proto.Screenshot
             * @instance
             */
            Screenshot.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Screenshot alpha_channel.
             * @member {boolean} alpha_channel
             * @memberof proto.Screenshot
             * @instance
             */
            Screenshot.prototype.alpha_channel = false;
    
            /**
             * Screenshot animated.
             * @member {boolean} animated
             * @memberof proto.Screenshot
             * @instance
             */
            Screenshot.prototype.animated = false;
    
            /**
             * Screenshot game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.Screenshot
             * @instance
             */
            Screenshot.prototype.game = null;
    
            /**
             * Screenshot height.
             * @member {number} height
             * @memberof proto.Screenshot
             * @instance
             */
            Screenshot.prototype.height = 0;
    
            /**
             * Screenshot image_id.
             * @member {string} image_id
             * @memberof proto.Screenshot
             * @instance
             */
            Screenshot.prototype.image_id = "";
    
            /**
             * Screenshot url.
             * @member {string} url
             * @memberof proto.Screenshot
             * @instance
             */
            Screenshot.prototype.url = "";
    
            /**
             * Screenshot width.
             * @member {number} width
             * @memberof proto.Screenshot
             * @instance
             */
            Screenshot.prototype.width = 0;
    
            /**
             * Screenshot checksum.
             * @member {string} checksum
             * @memberof proto.Screenshot
             * @instance
             */
            Screenshot.prototype.checksum = "";
    
            /**
             * Gets the default type url for Screenshot
             * @function getTypeUrl
             * @memberof proto.Screenshot
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Screenshot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Screenshot";
            };
    
            return Screenshot;
        })();
    
        proto.SearchResult = (function() {
    
            /**
             * Properties of a SearchResult.
             * @memberof proto
             * @interface ISearchResult
             * @property {Array.<proto.ISearch>|null} [searches] SearchResult searches
             */
    
            /**
             * Constructs a new SearchResult.
             * @memberof proto
             * @classdesc Represents a SearchResult.
             * @implements ISearchResult
             * @constructor
             * @param {proto.ISearchResult=} [properties] Properties to set
             */
            function SearchResult(properties) {
                this.searches = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * SearchResult searches.
             * @member {Array.<proto.ISearch>} searches
             * @memberof proto.SearchResult
             * @instance
             */
            SearchResult.prototype.searches = $util.emptyArray;
    
            /**
             * Gets the default type url for SearchResult
             * @function getTypeUrl
             * @memberof proto.SearchResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SearchResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.SearchResult";
            };
    
            return SearchResult;
        })();
    
        proto.Search = (function() {
    
            /**
             * Properties of a Search.
             * @memberof proto
             * @interface ISearch
             * @property {number|null} [id] Search id
             * @property {string|null} [alternative_name] Search alternative_name
             * @property {proto.ICharacter|null} [character] Search character
             * @property {proto.ICollection|null} [collection] Search collection
             * @property {proto.ICompany|null} [company] Search company
             * @property {string|null} [description] Search description
             * @property {proto.IGame|null} [game] Search game
             * @property {string|null} [name] Search name
             * @property {proto.IPlatform|null} [platform] Search platform
             * @property {number|null} [published_at] Search published_at
             * @property {proto.ITestDummy|null} [test_dummy] Search test_dummy
             * @property {proto.ITheme|null} [theme] Search theme
             * @property {string|null} [checksum] Search checksum
             */
    
            /**
             * Constructs a new Search.
             * @memberof proto
             * @classdesc Represents a Search.
             * @implements ISearch
             * @constructor
             * @param {proto.ISearch=} [properties] Properties to set
             */
            function Search(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Search id.
             * @member {number} id
             * @memberof proto.Search
             * @instance
             */
            Search.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Search alternative_name.
             * @member {string} alternative_name
             * @memberof proto.Search
             * @instance
             */
            Search.prototype.alternative_name = "";
    
            /**
             * Search character.
             * @member {proto.ICharacter|null|undefined} character
             * @memberof proto.Search
             * @instance
             */
            Search.prototype.character = null;
    
            /**
             * Search collection.
             * @member {proto.ICollection|null|undefined} collection
             * @memberof proto.Search
             * @instance
             */
            Search.prototype.collection = null;
    
            /**
             * Search company.
             * @member {proto.ICompany|null|undefined} company
             * @memberof proto.Search
             * @instance
             */
            Search.prototype.company = null;
    
            /**
             * Search description.
             * @member {string} description
             * @memberof proto.Search
             * @instance
             */
            Search.prototype.description = "";
    
            /**
             * Search game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.Search
             * @instance
             */
            Search.prototype.game = null;
    
            /**
             * Search name.
             * @member {string} name
             * @memberof proto.Search
             * @instance
             */
            Search.prototype.name = "";
    
            /**
             * Search platform.
             * @member {proto.IPlatform|null|undefined} platform
             * @memberof proto.Search
             * @instance
             */
            Search.prototype.platform = null;
    
            /**
             * Search published_at.
             * @member {number|null|undefined} published_at
             * @memberof proto.Search
             * @instance
             */
            Search.prototype.published_at = null;
    
            /**
             * Search test_dummy.
             * @member {proto.ITestDummy|null|undefined} test_dummy
             * @memberof proto.Search
             * @instance
             */
            Search.prototype.test_dummy = null;
    
            /**
             * Search theme.
             * @member {proto.ITheme|null|undefined} theme
             * @memberof proto.Search
             * @instance
             */
            Search.prototype.theme = null;
    
            /**
             * Search checksum.
             * @member {string} checksum
             * @memberof proto.Search
             * @instance
             */
            Search.prototype.checksum = "";
    
            /**
             * Gets the default type url for Search
             * @function getTypeUrl
             * @memberof proto.Search
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Search.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Search";
            };
    
            return Search;
        })();
    
        proto.TestDummyResult = (function() {
    
            /**
             * Properties of a TestDummyResult.
             * @memberof proto
             * @interface ITestDummyResult
             * @property {Array.<proto.ITestDummy>|null} [testdummies] TestDummyResult testdummies
             */
    
            /**
             * Constructs a new TestDummyResult.
             * @memberof proto
             * @classdesc Represents a TestDummyResult.
             * @implements ITestDummyResult
             * @constructor
             * @param {proto.ITestDummyResult=} [properties] Properties to set
             */
            function TestDummyResult(properties) {
                this.testdummies = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TestDummyResult testdummies.
             * @member {Array.<proto.ITestDummy>} testdummies
             * @memberof proto.TestDummyResult
             * @instance
             */
            TestDummyResult.prototype.testdummies = $util.emptyArray;
    
            /**
             * Gets the default type url for TestDummyResult
             * @function getTypeUrl
             * @memberof proto.TestDummyResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TestDummyResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.TestDummyResult";
            };
    
            return TestDummyResult;
        })();
    
        proto.TestDummy = (function() {
    
            /**
             * Properties of a TestDummy.
             * @memberof proto
             * @interface ITestDummy
             * @property {number|null} [id] TestDummy id
             * @property {boolean|null} [bool_value] TestDummy bool_value
             * @property {number|null} [created_at] TestDummy created_at
             * @property {proto.TestDummyEnumTestEnum|null} [enum_test] TestDummy enum_test
             * @property {number|null} [float_value] TestDummy float_value
             * @property {proto.IGame|null} [game] TestDummy game
             * @property {Array.<number>|null} [integer_array] TestDummy integer_array
             * @property {number|null} [integer_value] TestDummy integer_value
             * @property {string|null} [name] TestDummy name
             * @property {number|null} [new_integer_value] TestDummy new_integer_value
             * @property {boolean|null} ["private"] TestDummy private
             * @property {string|null} [slug] TestDummy slug
             * @property {Array.<string>|null} [string_array] TestDummy string_array
             * @property {Array.<proto.ITestDummy>|null} [test_dummies] TestDummy test_dummies
             * @property {proto.ITestDummy|null} [test_dummy] TestDummy test_dummy
             * @property {number|null} [updated_at] TestDummy updated_at
             * @property {string|null} [url] TestDummy url
             * @property {string|null} [checksum] TestDummy checksum
             */
    
            /**
             * Constructs a new TestDummy.
             * @memberof proto
             * @classdesc Represents a TestDummy.
             * @implements ITestDummy
             * @constructor
             * @param {proto.ITestDummy=} [properties] Properties to set
             */
            function TestDummy(properties) {
                this.integer_array = [];
                this.string_array = [];
                this.test_dummies = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * TestDummy id.
             * @member {number} id
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * TestDummy bool_value.
             * @member {boolean} bool_value
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.bool_value = false;
    
            /**
             * TestDummy created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.created_at = null;
    
            /**
             * TestDummy enum_test.
             * @member {proto.TestDummyEnumTestEnum} enum_test
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.enum_test = 0;
    
            /**
             * TestDummy float_value.
             * @member {number} float_value
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.float_value = 0;
    
            /**
             * TestDummy game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.game = null;
    
            /**
             * TestDummy integer_array.
             * @member {Array.<number>} integer_array
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.integer_array = $util.emptyArray;
    
            /**
             * TestDummy integer_value.
             * @member {number} integer_value
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.integer_value = 0;
    
            /**
             * TestDummy name.
             * @member {string} name
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.name = "";
    
            /**
             * TestDummy new_integer_value.
             * @member {number} new_integer_value
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.new_integer_value = 0;
    
            /**
             * TestDummy private.
             * @member {boolean} private
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype["private"] = false;
    
            /**
             * TestDummy slug.
             * @member {string} slug
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.slug = "";
    
            /**
             * TestDummy string_array.
             * @member {Array.<string>} string_array
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.string_array = $util.emptyArray;
    
            /**
             * TestDummy test_dummies.
             * @member {Array.<proto.ITestDummy>} test_dummies
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.test_dummies = $util.emptyArray;
    
            /**
             * TestDummy test_dummy.
             * @member {proto.ITestDummy|null|undefined} test_dummy
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.test_dummy = null;
    
            /**
             * TestDummy updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.updated_at = null;
    
            /**
             * TestDummy url.
             * @member {string} url
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.url = "";
    
            /**
             * TestDummy checksum.
             * @member {string} checksum
             * @memberof proto.TestDummy
             * @instance
             */
            TestDummy.prototype.checksum = "";
    
            /**
             * Gets the default type url for TestDummy
             * @function getTypeUrl
             * @memberof proto.TestDummy
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TestDummy.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.TestDummy";
            };
    
            return TestDummy;
        })();
    
        /**
         * TestDummyEnumTestEnum enum.
         * @name proto.TestDummyEnumTestEnum
         * @enum {number}
         * @property {number} TESTDUMMY_ENUM_TEST_NULL=0 TESTDUMMY_ENUM_TEST_NULL value
         * @property {number} ENUM1=1 ENUM1 value
         * @property {number} ENUM2=2 ENUM2 value
         */
        proto.TestDummyEnumTestEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TESTDUMMY_ENUM_TEST_NULL"] = 0;
            values[valuesById[1] = "ENUM1"] = 1;
            values[valuesById[2] = "ENUM2"] = 2;
            return values;
        })();
    
        proto.ThemeResult = (function() {
    
            /**
             * Properties of a ThemeResult.
             * @memberof proto
             * @interface IThemeResult
             * @property {Array.<proto.ITheme>|null} [themes] ThemeResult themes
             */
    
            /**
             * Constructs a new ThemeResult.
             * @memberof proto
             * @classdesc Represents a ThemeResult.
             * @implements IThemeResult
             * @constructor
             * @param {proto.IThemeResult=} [properties] Properties to set
             */
            function ThemeResult(properties) {
                this.themes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * ThemeResult themes.
             * @member {Array.<proto.ITheme>} themes
             * @memberof proto.ThemeResult
             * @instance
             */
            ThemeResult.prototype.themes = $util.emptyArray;
    
            /**
             * Gets the default type url for ThemeResult
             * @function getTypeUrl
             * @memberof proto.ThemeResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ThemeResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.ThemeResult";
            };
    
            return ThemeResult;
        })();
    
        proto.Theme = (function() {
    
            /**
             * Properties of a Theme.
             * @memberof proto
             * @interface ITheme
             * @property {number|null} [id] Theme id
             * @property {number|null} [created_at] Theme created_at
             * @property {string|null} [name] Theme name
             * @property {string|null} [slug] Theme slug
             * @property {number|null} [updated_at] Theme updated_at
             * @property {string|null} [url] Theme url
             * @property {string|null} [checksum] Theme checksum
             */
    
            /**
             * Constructs a new Theme.
             * @memberof proto
             * @classdesc Represents a Theme.
             * @implements ITheme
             * @constructor
             * @param {proto.ITheme=} [properties] Properties to set
             */
            function Theme(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Theme id.
             * @member {number} id
             * @memberof proto.Theme
             * @instance
             */
            Theme.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Theme created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.Theme
             * @instance
             */
            Theme.prototype.created_at = null;
    
            /**
             * Theme name.
             * @member {string} name
             * @memberof proto.Theme
             * @instance
             */
            Theme.prototype.name = "";
    
            /**
             * Theme slug.
             * @member {string} slug
             * @memberof proto.Theme
             * @instance
             */
            Theme.prototype.slug = "";
    
            /**
             * Theme updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.Theme
             * @instance
             */
            Theme.prototype.updated_at = null;
    
            /**
             * Theme url.
             * @member {string} url
             * @memberof proto.Theme
             * @instance
             */
            Theme.prototype.url = "";
    
            /**
             * Theme checksum.
             * @member {string} checksum
             * @memberof proto.Theme
             * @instance
             */
            Theme.prototype.checksum = "";
    
            /**
             * Gets the default type url for Theme
             * @function getTypeUrl
             * @memberof proto.Theme
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Theme.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Theme";
            };
    
            return Theme;
        })();
    
        proto.WebsiteResult = (function() {
    
            /**
             * Properties of a WebsiteResult.
             * @memberof proto
             * @interface IWebsiteResult
             * @property {Array.<proto.IWebsite>|null} [websites] WebsiteResult websites
             */
    
            /**
             * Constructs a new WebsiteResult.
             * @memberof proto
             * @classdesc Represents a WebsiteResult.
             * @implements IWebsiteResult
             * @constructor
             * @param {proto.IWebsiteResult=} [properties] Properties to set
             */
            function WebsiteResult(properties) {
                this.websites = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * WebsiteResult websites.
             * @member {Array.<proto.IWebsite>} websites
             * @memberof proto.WebsiteResult
             * @instance
             */
            WebsiteResult.prototype.websites = $util.emptyArray;
    
            /**
             * Gets the default type url for WebsiteResult
             * @function getTypeUrl
             * @memberof proto.WebsiteResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WebsiteResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.WebsiteResult";
            };
    
            return WebsiteResult;
        })();
    
        proto.Website = (function() {
    
            /**
             * Properties of a Website.
             * @memberof proto
             * @interface IWebsite
             * @property {number|null} [id] Website id
             * @property {proto.WebsiteCategoryEnum|null} [category] Website category
             * @property {proto.IGame|null} [game] Website game
             * @property {boolean|null} [trusted] Website trusted
             * @property {string|null} [url] Website url
             * @property {string|null} [checksum] Website checksum
             * @property {proto.IWebsiteType|null} [type] Website type
             */
    
            /**
             * Constructs a new Website.
             * @memberof proto
             * @classdesc Represents a Website.
             * @implements IWebsite
             * @constructor
             * @param {proto.IWebsite=} [properties] Properties to set
             */
            function Website(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * Website id.
             * @member {number} id
             * @memberof proto.Website
             * @instance
             */
            Website.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * Website category.
             * @member {proto.WebsiteCategoryEnum} category
             * @memberof proto.Website
             * @instance
             */
            Website.prototype.category = 0;
    
            /**
             * Website game.
             * @member {proto.IGame|null|undefined} game
             * @memberof proto.Website
             * @instance
             */
            Website.prototype.game = null;
    
            /**
             * Website trusted.
             * @member {boolean} trusted
             * @memberof proto.Website
             * @instance
             */
            Website.prototype.trusted = false;
    
            /**
             * Website url.
             * @member {string} url
             * @memberof proto.Website
             * @instance
             */
            Website.prototype.url = "";
    
            /**
             * Website checksum.
             * @member {string} checksum
             * @memberof proto.Website
             * @instance
             */
            Website.prototype.checksum = "";
    
            /**
             * Website type.
             * @member {proto.IWebsiteType|null|undefined} type
             * @memberof proto.Website
             * @instance
             */
            Website.prototype.type = null;
    
            /**
             * Gets the default type url for Website
             * @function getTypeUrl
             * @memberof proto.Website
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Website.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.Website";
            };
    
            return Website;
        })();
    
        proto.WebsiteTypeResult = (function() {
    
            /**
             * Properties of a WebsiteTypeResult.
             * @memberof proto
             * @interface IWebsiteTypeResult
             * @property {Array.<proto.IWebsiteType>|null} [websitetypes] WebsiteTypeResult websitetypes
             */
    
            /**
             * Constructs a new WebsiteTypeResult.
             * @memberof proto
             * @classdesc Represents a WebsiteTypeResult.
             * @implements IWebsiteTypeResult
             * @constructor
             * @param {proto.IWebsiteTypeResult=} [properties] Properties to set
             */
            function WebsiteTypeResult(properties) {
                this.websitetypes = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * WebsiteTypeResult websitetypes.
             * @member {Array.<proto.IWebsiteType>} websitetypes
             * @memberof proto.WebsiteTypeResult
             * @instance
             */
            WebsiteTypeResult.prototype.websitetypes = $util.emptyArray;
    
            /**
             * Gets the default type url for WebsiteTypeResult
             * @function getTypeUrl
             * @memberof proto.WebsiteTypeResult
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WebsiteTypeResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.WebsiteTypeResult";
            };
    
            return WebsiteTypeResult;
        })();
    
        proto.WebsiteType = (function() {
    
            /**
             * Properties of a WebsiteType.
             * @memberof proto
             * @interface IWebsiteType
             * @property {number|null} [id] WebsiteType id
             * @property {string|null} [type] WebsiteType type
             * @property {number|null} [created_at] WebsiteType created_at
             * @property {number|null} [updated_at] WebsiteType updated_at
             * @property {string|null} [checksum] WebsiteType checksum
             */
    
            /**
             * Constructs a new WebsiteType.
             * @memberof proto
             * @classdesc Represents a WebsiteType.
             * @implements IWebsiteType
             * @constructor
             * @param {proto.IWebsiteType=} [properties] Properties to set
             */
            function WebsiteType(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
    
            /**
             * WebsiteType id.
             * @member {number} id
             * @memberof proto.WebsiteType
             * @instance
             */
            WebsiteType.prototype.id = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
            /**
             * WebsiteType type.
             * @member {string} type
             * @memberof proto.WebsiteType
             * @instance
             */
            WebsiteType.prototype.type = "";
    
            /**
             * WebsiteType created_at.
             * @member {number|null|undefined} created_at
             * @memberof proto.WebsiteType
             * @instance
             */
            WebsiteType.prototype.created_at = null;
    
            /**
             * WebsiteType updated_at.
             * @member {number|null|undefined} updated_at
             * @memberof proto.WebsiteType
             * @instance
             */
            WebsiteType.prototype.updated_at = null;
    
            /**
             * WebsiteType checksum.
             * @member {string} checksum
             * @memberof proto.WebsiteType
             * @instance
             */
            WebsiteType.prototype.checksum = "";
    
            /**
             * Gets the default type url for WebsiteType
             * @function getTypeUrl
             * @memberof proto.WebsiteType
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WebsiteType.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/proto.WebsiteType";
            };
    
            return WebsiteType;
        })();
    
        return proto;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.Timestamp = (function() {
    
                /**
                 * Properties of a Timestamp.
                 * @memberof google.protobuf
                 * @interface ITimestamp
                 * @property {number|null} [seconds] Timestamp seconds
                 * @property {number|null} [nanos] Timestamp nanos
                 */
    
                /**
                 * Constructs a new Timestamp.
                 * @memberof google.protobuf
                 * @classdesc Represents a Timestamp.
                 * @implements ITimestamp
                 * @constructor
                 * @param {number=} [properties] Properties to set
                 */
                function Timestamp(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Timestamp seconds.
                 * @member {number} seconds
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Timestamp nanos.
                 * @member {number} nanos
                 * @memberof google.protobuf.Timestamp
                 * @instance
                 */
                Timestamp.prototype.nanos = 0;
    
                /**
                 * Gets the default type url for Timestamp
                 * @function getTypeUrl
                 * @memberof google.protobuf.Timestamp
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Timestamp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/google.protobuf.Timestamp";
                };
    
                return Timestamp;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();

    return $root;
});
