"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FindOperator_1 = require("../FindOperator");
/**
 * Find Options Operator.
 * Example: { someField: ILike("%SOME string%") }
 */
function ILike(value) {
    return new FindOperator_1.FindOperator("ilike", value);
}
exports.ILike = ILike;

//# sourceMappingURL=ILike.js.map
