/* K상사 관련 IE9 rebuild 함수 재정의 */
/*
_SBGrid.CT.Grid.prototype.rebuild = function(){
	var arrColumns, arrOrgColIds, arrColIds;
	try{
		arrColumns = this.attr('columns');
		var objCtrl;
		var nRowHeader = this._getRowHeaderCount();
		
		arrOrgColIds = this.attr('orgcolids');
		arrColIds = this.attr('colids');
		for(var k = 0, nLengh = arrColIds.length; k< nLengh; k++){
			if(arrOrgColIds[k] != this.attr('colids')[k]){
				var prevIdx = this._getColOfID(arrOrgColIds[k]);
				var nIdx = this._getColOfID(this.attr('colids')[k]);
				this._moveColumnAPI(prevIdx, nIdx);
			}
		}
		
		for(var i =nRowHeader; i<this.attr('cols'); i++){
			var isCreateDisabled = this.attr('createcolumnsinfo')[i-nRowHeader].disabled;
			var isDisabled = this.getColDisabled(i);
			
			var isCreateHidden = this.attr('createcolumnsinfo')[i-nRowHeader].hidden;
			var isHidden = this.getColHidden(i);
			
			if(isCreateHidden != isHidden){
				if(_.isUndefined(isCreateHidden) && isHidden){
					this.setColHidden(i, false, false)
				}
				if(!_.isUndefined(isCreateHidden)){
					var bHiddenFlag = isHidden ? true : false;
					this.setColHidden(i, bHiddenFlag, false);
				}
			}
			
			if(isCreateDisabled != isDisabled){
				if(_.isUndefined(isCreateDisabled) && isDisabled){
					this.setColDisabled(i, false, false)
				}
				if(!_.isUndefined(isCreateDisabled)){
					var bDisabledFlag = isDisabled ? true : false;
					this.setColDisabled(i, bDisabledFlag, false);
				}
			}
			if(arrColumns[i].getType() == 'combo' || arrColumns[i].getType() == 'inputcombo'){
				objCtrl = arrColumns[i].getTarget(); 
				var strRef = objCtrl.attr('ref');
				objCtrl._setComboData(eval(strRef));
				objCtrl._initOptions();
			}
			objCtrl = null;
		}
		for(var j=0; j<this.attr('rows'); j++){
			if(this._getRowPosition(j) == 'shown'){
				var objRowStyle;
				if(j < this.attr('fixedrows')){
					objRowStyle = this._getRowStyle(j, 'all');
				}
				else{
					objRowStyle = this._getRowStyle(j, 'all').data;
					if(Object.keys(objRowStyle).length == 0){
						objRowStyle = this._getRowStyle(j, 'all').fixed;
					}
				}
				if(Object.keys(objRowStyle).length > 0){
					this.removeRowStyle(j, 'all', false, false);
				}
				for(var k=0; k<this.attr('cols'); k++){
					var objCellStyle = this._getCellStyle(j, k);
					if(Object.keys(objCellStyle).length > 0){
						this.removeCellStyle(j, k, false, false);
					}
					objCellStyle = null;
					var isDisabled = this._getCellDisabled(j, k);
					var isHide = this.getCellHide(j, k);
					if(isDisabled){
						this.setCellDisabled(j, k, false, false);
					}
					if(isHide){
						this.setCellHide(j, k, false, false);
					}
				}
				objRowStyle = null;
			}
		}
		this._clearSelection();
		this.clearStatus();
		this.attr('rowsyncdatainfo').clear();
		this.refresh(false);
	}
	finally{
		arrColumns = arrOrgColIds= arrColIds = null;
	}
};
*/

/* K상사 관련 setCellDisabled 함수 재정의 */
/*
_SBGrid.CT.Grid.prototype.setCellDisabled = function (startrow, startcol, endrow, endcol, status, refresh, uihidden){
	var APIname = 'setCellDisabled';
	if(arguments.length < 6 && !(_.isNumber(endrow))){
		if(arguments.length < 3){
			_SBGrid.ST.errMsg(APIname, "Please check parameter's counts.", _SBGrid.DEF.DEBUG_MODE);
			return;
		}
		if(!(_.isNumber(startrow))){
			_SBGrid.ST.errMsg(APIname, "Please check if first parameter's type is 'Number'.", _SBGrid.DEF.DEBUG_MODE);
			return;
		}
		if(!(_.isNumber(startcol))){
			_SBGrid.ST.errMsg(APIname, "Please check if second parameter's type is 'Number'.", _SBGrid.DEF.DEBUG_MODE);
			return;
		}
		var uihidden = status;
		if(uihidden == undefined){
			uihidden = false;
		}
		var status = endrow;
		if(!(_.isBoolean(status))){
			_SBGrid.ST.errMsg(APIname, "Please check if 3rd parameter's type is 'Boolean'.", _SBGrid.DEF.DEBUG_MODE);
			return;
		}
		var refresh = endcol;
		if(refresh == undefined){
			refresh = false;
		} else if(!(_.isBoolean(refresh))){
			_SBGrid.ST.errMsg(APIname, "Please check if 4th parameter's type is 'Boolean'.", _SBGrid.DEF.DEBUG_MODE);
			return;
		}
		if(!(_.isBoolean(uihidden))){
			_SBGrid.ST.errMsg(APIname, "Please check if 5th parameter's type is 'Boolean'.", _SBGrid.DEF.DEBUG_MODE);
			return;
		}
		this._setCellDisabled(startrow, startcol, status, refresh, uihidden);
	}
	else{
		if(!(_.isNumber(startrow))){
			_SBGrid.ST.errMsg(APIname, "Please check if first parameter's type is 'Number'.", _SBGrid.DEF.DEBUG_MODE);
			return;
		}
		if(!(_.isNumber(startcol))){
			_SBGrid.ST.errMsg(APIname, "Please check if second parameter's type is 'Number'.", _SBGrid.DEF.DEBUG_MODE);
			return;
		}
		if(!(_.isNumber(endrow))){
			_SBGrid.ST.errMsg(APIname, "Please check if 3rd parameter's type is 'Number'.", _SBGrid.DEF.DEBUG_MODE);
			return;
		}
		if(!(_.isNumber(endcol))){
			_SBGrid.ST.errMsg(APIname, "Please check if 4th parameter's type is 'Number'.", _SBGrid.DEF.DEBUG_MODE);
			return;
		}
		if(!(_.isBoolean(status))){
			_SBGrid.ST.errMsg(APIname, "Please check if 5th parameter's type is 'Boolean'.", _SBGrid.DEF.DEBUG_MODE);
			return;
		}
		if(refresh == undefined){
			refresh = false;
		} else if(!(_.isBoolean(refresh))){
			_SBGrid.ST.errMsg(APIname, "Please check if 6th parameter's type is 'Boolean'.", _SBGrid.DEF.DEBUG_MODE);
			return;
		}
		if(uihidden == undefined){
			uihidden = false;
		} else if(!(_.isBoolean(uihidden))){
			_SBGrid.ST.errMsg(APIname, "Please check if 7th parameter's type is 'Boolean'.", _SBGrid.DEF.DEBUG_MODE);
			return;
		}
		this._setCellsDisabled(startrow, startcol, endrow, endcol, status, refresh, uihidden);
	}
};
*/