import { __awaiter, __extends, __generator } from "tslib";
import { PostgresDriver } from "../postgres/PostgresDriver";
import { PlatformTools } from "../../platform/PlatformTools";
import { AuroraDataApiPostgresQueryRunner } from "../aurora-data-api-pg/AuroraDataApiPostgresQueryRunner";
var PostgresWrapper = /** @class */ (function (_super) {
    __extends(PostgresWrapper, _super);
    function PostgresWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PostgresWrapper;
}(PostgresDriver));
var AuroraDataApiPostgresDriver = /** @class */ (function (_super) {
    __extends(AuroraDataApiPostgresDriver, _super);
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function AuroraDataApiPostgresDriver(connection) {
        var _this = _super.call(this) || this;
        _this.connection = connection;
        _this.options = connection.options;
        _this.isReplicated = false;
        // load data-api package
        _this.loadDependencies();
        return _this;
    }
    // -------------------------------------------------------------------------
    // Public Implemented Methods
    // -------------------------------------------------------------------------
    /**
     * Performs connection to the database.
     * Based on pooling options, it can either create connection immediately,
     * either create a pool and create connection when needed.
     */
    AuroraDataApiPostgresDriver.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     * Closes connection with database.
     */
    AuroraDataApiPostgresDriver.prototype.disconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     * Creates a query runner used to execute database queries.
     */
    AuroraDataApiPostgresDriver.prototype.createQueryRunner = function (mode) {
        var _this = this;
        return new AuroraDataApiPostgresQueryRunner(this, new this.DataApiDriver(this.options.region, this.options.secretArn, this.options.resourceArn, this.options.database, function (query, parameters) { return _this.connection.logger.logQuery(query, parameters); }, this.options.serviceConfigOptions, this.options.formatOptions), mode);
    };
    // -------------------------------------------------------------------------
    // Protected Methods
    // -------------------------------------------------------------------------
    /**
     * If driver dependency is not given explicitly, then try to load it via "require".
     */
    AuroraDataApiPostgresDriver.prototype.loadDependencies = function () {
        var pg = PlatformTools.load("typeorm-aurora-data-api-driver").pg;
        this.DataApiDriver = pg;
    };
    /**
     * Executes given query.
     */
    AuroraDataApiPostgresDriver.prototype.executeQuery = function (connection, query) {
        return this.connection.query(query);
    };
    /**
     * Makes any action after connection (e.g. create extensions in Postgres driver).
     */
    AuroraDataApiPostgresDriver.prototype.afterConnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var extensionsMetadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkMetadataForExtensions()];
                    case 1:
                        extensionsMetadata = _a.sent();
                        if (!extensionsMetadata.hasExtensions) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.enableExtensions(extensionsMetadata, this.connection)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    return AuroraDataApiPostgresDriver;
}(PostgresWrapper));
export { AuroraDataApiPostgresDriver };

//# sourceMappingURL=AuroraDataApiPostgresDriver.js.map
