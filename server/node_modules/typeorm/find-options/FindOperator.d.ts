import { ObjectLiteral } from "../common/ObjectLiteral";
import { FindOperatorType } from "./FindOperatorType";
declare type SqlGeneratorType = (aliasPath: string) => string;
/**
 * Find Operator used in Find Conditions.
 */
export declare class FindOperator<T> {
    /**
     * Operator type.
     */
    private _type;
    /**
     * Parameter value.
     */
    private _value;
    /**
     * ObjectLiteral parameters.
     */
    private _objectLiteralParameters;
    /**
     * Indicates if parameter is used or not for this operator.
     */
    private _useParameter;
    /**
     * Indicates if multiple parameters must be used for this operator.
     */
    private _multipleParameters;
    /**
     * SQL generator
     */
    private _getSql;
    constructor(type: FindOperatorType, value: T | FindOperator<T>, useParameter?: boolean, multipleParameters?: boolean, getSql?: SqlGeneratorType, objectLiteralParameters?: ObjectLiteral);
    /**
     * Indicates if parameter is used or not for this operator.
     * Extracts final value if value is another find operator.
     */
    readonly useParameter: boolean;
    /**
     * Indicates if multiple parameters must be used for this operator.
     * Extracts final value if value is another find operator.
     */
    readonly multipleParameters: boolean;
    /**
     * Gets the Type of this FindOperator
     */
    readonly type: string;
    /**
     * Gets the final value needs to be used as parameter value.
     */
    readonly value: T;
    /**
     * Gets ObjectLiteral parameters.
     */
    readonly objectLiteralParameters: ObjectLiteral | undefined;
    /**
     * Gets the child FindOperator if it exists
     */
    readonly child: FindOperator<T> | undefined;
    /**
     * Gets the SQL generator
     */
    readonly getSql: SqlGeneratorType | undefined;
}
export {};
