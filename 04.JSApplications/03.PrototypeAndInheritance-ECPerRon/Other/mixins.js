
function solve() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        };

        classToExtend.prototype.isFast = function (params) {
            return this.processorSpeed > (this.ram / 4);
        };

        classToExtend.prototype.isRoomy = function (params) {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed);
        };
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return this.manufacturer == this.keyboard.manufacturer && this.manufacturer == this.monitor.manufacturer;
        };

        classToExtend.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 && (this.color === 'Black' || this.color === 'Silver') && this.weight < 3;
        };
    }

    return { computerQualityMixin, styleMixin };
}