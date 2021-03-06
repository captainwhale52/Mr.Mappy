﻿/// <reference path="..\..\..\Scripts\typings\backbone\backbone.d.ts" />
/// <reference path="..\..\..\Scripts\typings\leaflet\leaflet.d.ts" />
/// <reference path="..\..\..\Scripts\typings\moment\moment.d.ts" />
/// <reference path="..\controller\setting.ts" />
module ForagingMap {
    export class Layer extends Backbone.Model {
        url: string = "core/php/layer.php";
        private isSavable = true;
        constructor(attributes?: any, options?: any) {
            super(attributes, options);
            var that: Layer = this;
            that.url = Setting.BASE_URL + that.url;
            that.defaults = <any>{
                "name": "",
                "desc": "",
                "type": 0,
            };
            that.off("change");
            that.on("change", function (model, options) {
                if (that.isSavable == false) return;
                model.save();
                FMV.getMsgView().renderSuccess("'" + model.get("name") + "' " + FML.getViewUIInfoSaveSuccessMsg());
                FMV.getUIView().render();
            });
        }
        parse(response: any, options?: any): any {
            if (response.id != null) {
                response.id = parseInt(response.id);
            }
            response.type = parseInt(response.type);
            return super.parse(response, options);
        }
        toJSON(options?: any): any {
            var clone = this.clone().attributes;
            if (this.id != null) {
                clone["id"] = this.id;
            }
            return clone;
        }
        setIsSavable(isSavable: boolean): void {
            this.isSavable = isSavable;
        }
        getIsSavable(): boolean {
            return this.isSavable;
        }
    }
    

    export class Layers extends Backbone.Collection<Layer> {
        url: string = "core/php/layers.php";
        constructor(models?: Item[], options?: any) {
            super(models, options);
            this.model = Layer;
            this.url = Setting.BASE_URL + this.url;
        }
        getSizeOfType(typeIndex: number): number {
            var that: Layers = this;
            var result: number = 0;
            $.each(that.models, function (index: number, model: Layer) {
                if (parseInt(model.get("type")) == typeIndex) {
                    result++;
                }
            });
            return result;
        }
    }

    export class Type extends Backbone.Model {
        constructor(attributes?: any, options?: any) {
            super(attributes, options);
            this.defaults = <any>{
                "name": "",
                "type": 0,
            };
        }
        parse(response: any, options?: any): any {
            if (response.id != null) {
                response.id = parseInt(response.id);
            }
            response.type = parseInt(response.type);
            return super.parse(response, options);
        }
        toJSON(options?: any): any {
            var clone = this.clone().attributes;
            if (this.id != null) {
                clone["id"] = this.id;
            }
            return clone;
        }
    }
    export class Types extends Backbone.Collection<Type> {
        constructor(models?: Type[], options?: any) {
            super(models, options);
            this.model = Type;
        }
        toArray(): any {
            var that: Types = this;
            var result = new Array();
            _.each(that.models, function (item) {
                result.push([item.get("name"), item.get("type")]);
            });
            return result;
        }
    }
}