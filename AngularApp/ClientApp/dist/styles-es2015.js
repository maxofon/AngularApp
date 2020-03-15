(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
  \********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto\");\n:root {\n  --primary-color: #dc3545;\n  --dark-color: #333333;\n  --light-color: #f4f4f4;\n  --danger-color: #dc3545;\n  --success-color: #28a745;\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1rem;\n  line-height: 1.6;\n  background-color: #fff;\n  color: #333;\n}\na {\n  color: var(--primary-color);\n  cursor: pointer;\n  text-decoration: none;\n}\na:hover {\n  color: #666;\n}\nul {\n  list-style: none;\n}\nimg {\n  width: 100%;\n}\n.container {\n  max-width: 1100px;\n  margin: auto;\n  overflow: hidden;\n  padding: 0 2rem;\n}\n.text-primary {\n  color: var(--primary-color);\n}\n.text-dark {\n  color: var(--dark-color);\n}\n.text-success {\n  color: var(--success-color);\n}\n.text-danger {\n  color: var(--danger-color);\n}\n.text-center {\n  text-align: center;\n}\n.card {\n  padding: 1rem;\n  border: #ccc 1px dotted;\n  margin: 0.7rem 0;\n}\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.card-content {\n  margin-bottom: 0.5rem;\n}\n.list {\n  margin: 0.5rem 0;\n}\n.list li {\n  padding-bottom: 0.3rem;\n}\n.btn {\n  display: inline-block;\n  background: var(--light-color);\n  color: #333;\n  padding: 0.4rem 1.3rem;\n  font-size: 1rem;\n  border: none;\n  cursor: pointer;\n  margin-right: 0.5rem;\n  transition: opacity 0.2s ease-in;\n  outline: none;\n}\n.btn:disabled {\n  cursor: not-allowed;\n  background: var(--light-color);\n  color: #111;\n}\n.btn-link {\n  background: none;\n  padding: 0;\n  margin: 0;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-sm {\n  font-size: 0.8rem;\n  padding: 0.3rem 1rem;\n  margin-right: 0.2rem;\n}\n.badge {\n  display: inline-block;\n  font-size: 0.8rem;\n  padding: 0.2rem 0.7rem;\n  text-align: center;\n  margin: 0.3rem;\n  background: var(--light-color);\n  color: #333;\n  border-radius: 5px;\n}\n.alert {\n  padding: 0.7rem;\n  margin: 1rem 0;\n  opacity: 0.9;\n  background: var(--light-color);\n  color: #333;\n}\n.btn-primary,\n.bg-primary,\n.badge-primary,\n.alert-primary {\n  background: var(--primary-color);\n  color: #fff;\n}\n.btn-light,\n.bg-light,\n.badge-light,\n.alert-light {\n  background: var(--light-color);\n  color: #333;\n}\n.btn-dark,\n.bg-dark,\n.badge-dark,\n.alert-dark {\n  background: var(--dark-color);\n  color: #fff;\n}\n.btn-danger,\n.bg-danger,\n.badge-danger,\n.alert-danger {\n  background: var(--danger-color);\n  color: #fff;\n}\n.btn-success,\n.bg-success,\n.badge-success,\n.alert-success {\n  background: var(--success-color);\n  color: #fff;\n}\n.btn-white,\n.bg-white,\n.badge-white,\n.alert-white {\n  background: #fff;\n  color: #333;\n  border: #ccc solid 1px;\n}\n.btn:hover {\n  opacity: 0.8;\n}\n.bg-light,\n.badge-light {\n  border: #ccc solid 1px;\n}\n.round-img {\n  border-radius: 50%;\n}\n.form-control {\n  display: block;\n  color: #888;\n  margin-bottom: 0.8rem;\n}\n.form-control.invalid {\n  color: var(--primary-color);\n}\n.form-control.invalid input {\n  border-color: var(--primary-color);\n}\n.form-control .validation {\n  color: var(--primary-color);\n}\ninput[type=text],\ninput[type=email],\ninput[type=password],\ninput[type=date],\nselect,\ntextarea {\n  display: block;\n  width: 100%;\n  padding: 0.4rem;\n  font-size: 1.2rem;\n  border: 1px solid #ccc;\n}\ninput[type=submit],\nbutton {\n  font: inherit;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\ntable th,\ntable td {\n  padding: 1rem;\n  text-align: left;\n}\ntable th {\n  background: var(--light-color);\n}\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.7rem 2rem;\n  z-index: 1;\n  width: 100%;\n  opacity: 0.9;\n  margin-bottom: 1rem;\n}\n.navbar.main {\n  justify-content: center;\n  border-bottom: 1px solid var(--dark-color);\n}\n.navbar ul {\n  display: flex;\n}\n.navbar li.active a {\n  color: var(--dark-color);\n  font-weight: bold;\n  cursor: default;\n}\n.navbar a {\n  color: #fff;\n  padding: 0.45rem;\n  margin: 0 0.25rem;\n}\n.navbar a:hover {\n  color: var(--light-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXE1heGltIFJlem5pa292XFxzb3VyY2VcXHJlcG9zXFxBbmd1bGFyQXBwXFxBbmd1bGFyQXBwXFxBbmd1bGFyQXBwXFxDbGllbnRBcHAvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw2REFBQTtBQUVSO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtBQ0FGO0FER0E7RUFDRSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDQUY7QURHQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDQUY7QURHQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDQUY7QURFRTtFQUNFLFdBQUE7QUNBSjtBRElBO0VBQ0UsZ0JBQUE7QUNERjtBRElBO0VBQ0UsV0FBQTtBQ0RGO0FESUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNERjtBRElBO0VBQ0UsMkJBQUE7QUNERjtBRElBO0VBQ0Usd0JBQUE7QUNERjtBRElBO0VBQ0UsMkJBQUE7QUNERjtBRElBO0VBQ0UsMEJBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREdFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElFO0VBQ0UscUJBQUE7QUNGSjtBRE1BO0VBQ0UsZ0JBQUE7QUNIRjtBREtFO0VBQ0Usc0JBQUE7QUNISjtBRE9BO0VBQ0UscUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0FDSkY7QURNRTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDSko7QURRQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNMRjtBRFFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNMRjtBRFFBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FDTEY7QURRQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDTEY7QURRQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0xGO0FEUUE7Ozs7RUFJRSxnQ0FBQTtFQUNBLFdBQUE7QUNMRjtBRFFBOzs7O0VBSUUsOEJBQUE7RUFDQSxXQUFBO0FDTEY7QURRQTs7OztFQUlFLDZCQUFBO0VBQ0EsV0FBQTtBQ0xGO0FEUUE7Ozs7RUFJRSwrQkFBQTtFQUNBLFdBQUE7QUNMRjtBRFFBOzs7O0VBSUUsZ0NBQUE7RUFDQSxXQUFBO0FDTEY7QURRQTs7OztFQUlFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FDTEY7QURRQTtFQUNFLFlBQUE7QUNMRjtBRFFBOztFQUVFLHNCQUFBO0FDTEY7QURRQTtFQUNFLGtCQUFBO0FDTEY7QURRQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUNMRjtBRE9FO0VBQ0UsMkJBQUE7QUNMSjtBRE1JO0VBQ0Usa0NBQUE7QUNKTjtBRFFFO0VBQ0UsMkJBQUE7QUNOSjtBRFVBOzs7Ozs7RUFNRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDUEY7QURVQTs7RUFFRSxhQUFBO0FDUEY7QURVQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ1BGO0FEVUE7O0VBRUUsYUFBQTtFQUNBLGdCQUFBO0FDUEY7QURVQTtFQUNFLDhCQUFBO0FDUEY7QURVQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1BGO0FEU0U7RUFDRSx1QkFBQTtFQUNBLDBDQUFBO0FDUEo7QURVRTtFQUNFLGFBQUE7QUNSSjtBRFdFO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNUSjtBRFlFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNWSjtBRFlJO0VBQ0UseUJBQUE7QUNWTiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bycpO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0tcHJpbWFyeS1jb2xvcjogI2RjMzU0NTtcclxuICAtLWRhcmstY29sb3I6ICMzMzMzMzM7XHJcbiAgLS1saWdodC1jb2xvcjogI2Y0ZjRmNDtcclxuICAtLWRhbmdlci1jb2xvcjogI2RjMzU0NTtcclxuICAtLXN1Y2Nlc3MtY29sb3I6ICMyOGE3NDU7XHJcbn1cclxuXHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICB9XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDExMDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbn1cclxuXHJcbi50ZXh0LXByaW1hcnkge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLnRleHQtZGFyayB7XHJcbiAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xyXG59XHJcblxyXG4udGV4dC1zdWNjZXNzIHtcclxuICBjb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgY29sb3I6IHZhcigtLWRhbmdlci1jb2xvcik7XHJcbn1cclxuXHJcbi50ZXh0LWNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXI6ICNjY2MgMXB4IGRvdHRlZDtcclxuICBtYXJnaW46IDAuN3JlbSAwO1xyXG5cclxuICAmLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICYtY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICBtYXJnaW46IDAuNXJlbSAwO1xyXG5cclxuICBsaSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcclxuICBjb2xvcjogIzMzMztcclxuICBwYWRkaW5nOiAwLjRyZW0gMS4zcmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcclxuICAgIGNvbG9yOiAjMTExO1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1saW5rIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYnRuLWJsb2NrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ0bi1zbSB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHBhZGRpbmc6IDAuMnJlbSAwLjdyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMC4zcmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcclxuICBjb2xvcjogIzMzMztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgcGFkZGluZzogMC43cmVtO1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1jb2xvcik7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSxcclxuLmJnLXByaW1hcnksXHJcbi5iYWRnZS1wcmltYXJ5LFxyXG4uYWxlcnQtcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idG4tbGlnaHQsXHJcbi5iZy1saWdodCxcclxuLmJhZGdlLWxpZ2h0LFxyXG4uYWxlcnQtbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmJ0bi1kYXJrLFxyXG4uYmctZGFyayxcclxuLmJhZGdlLWRhcmssXHJcbi5hbGVydC1kYXJrIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWNvbG9yKTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJ0bi1kYW5nZXIsXHJcbi5iZy1kYW5nZXIsXHJcbi5iYWRnZS1kYW5nZXIsXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1jb2xvcik7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyxcclxuLmJnLXN1Y2Nlc3MsXHJcbi5iYWRnZS1zdWNjZXNzLFxyXG4uYWxlcnQtc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idG4td2hpdGUsXHJcbi5iZy13aGl0ZSxcclxuLmJhZGdlLXdoaXRlLFxyXG4uYWxlcnQtd2hpdGUge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYm9yZGVyOiAjY2NjIHNvbGlkIDFweDtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4uYmctbGlnaHQsXHJcbi5iYWRnZS1saWdodCB7XHJcbiAgYm9yZGVyOiAjY2NjIHNvbGlkIDFweDtcclxufVxyXG5cclxuLnJvdW5kLWltZyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzg4ODtcclxuICBtYXJnaW4tYm90dG9tOiAuOHJlbTtcclxuXHJcbiAgJi5pbnZhbGlkIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIGlucHV0IHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC52YWxpZGF0aW9uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB9XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9J3RleHQnXSxcclxuaW5wdXRbdHlwZT0nZW1haWwnXSxcclxuaW5wdXRbdHlwZT0ncGFzc3dvcmQnXSxcclxuaW5wdXRbdHlwZT0nZGF0ZSddLFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuaW5wdXRbdHlwZT0nc3VibWl0J10sXHJcbmJ1dHRvbiB7XHJcbiAgZm9udDogaW5oZXJpdDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbn1cclxuXHJcbnRhYmxlIHRoLFxyXG50YWJsZSB0ZCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50YWJsZSB0aCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtY29sb3IpO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAycmVtO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4gICYubWFpbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICBsaS5hY3RpdmUgYSB7XHJcbiAgICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwLjQ1cmVtO1xyXG4gICAgbWFyZ2luOiAwIDAuMjVyZW07XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90b1wiKTtcbjpyb290IHtcbiAgLS1wcmltYXJ5LWNvbG9yOiAjZGMzNTQ1O1xuICAtLWRhcmstY29sb3I6ICMzMzMzMzM7XG4gIC0tbGlnaHQtY29sb3I6ICNmNGY0ZjQ7XG4gIC0tZGFuZ2VyLWNvbG9yOiAjZGMzNTQ1O1xuICAtLXN1Y2Nlc3MtY29sb3I6ICMyOGE3NDU7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzMzMztcbn1cblxuYSB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICM2NjY7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwIDJyZW07XG59XG5cbi50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbi50ZXh0LWRhcmsge1xuICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XG59XG5cbi50ZXh0LXN1Y2Nlc3Mge1xuICBjb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcik7XG59XG5cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiB2YXIoLS1kYW5nZXItY29sb3IpO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyOiAjY2NjIDFweCBkb3R0ZWQ7XG4gIG1hcmdpbjogMC43cmVtIDA7XG59XG4uY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2FyZC1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG4ubGlzdCBsaSB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XG59XG5cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbiAgY29sb3I6ICMzMzM7XG4gIHBhZGRpbmc6IDAuNHJlbSAxLjNyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5idG46ZGlzYWJsZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1jb2xvcik7XG4gIGNvbG9yOiAjMTExO1xufVxuXG4uYnRuLWxpbmsge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5idG4tYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4tc20ge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZzogMC4zcmVtIDFyZW07XG4gIG1hcmdpbi1yaWdodDogMC4ycmVtO1xufVxuXG4uYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBwYWRkaW5nOiAwLjJyZW0gMC43cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMC4zcmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1jb2xvcik7XG4gIGNvbG9yOiAjMzMzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5hbGVydCB7XG4gIHBhZGRpbmc6IDAuN3JlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtY29sb3IpO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmJ0bi1wcmltYXJ5LFxuLmJnLXByaW1hcnksXG4uYmFkZ2UtcHJpbWFyeSxcbi5hbGVydC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWxpZ2h0LFxuLmJnLWxpZ2h0LFxuLmJhZGdlLWxpZ2h0LFxuLmFsZXJ0LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtY29sb3IpO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmJ0bi1kYXJrLFxuLmJnLWRhcmssXG4uYmFkZ2UtZGFyayxcbi5hbGVydC1kYXJrIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1jb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWRhbmdlcixcbi5iZy1kYW5nZXIsXG4uYmFkZ2UtZGFuZ2VyLFxuLmFsZXJ0LWRhbmdlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhbmdlci1jb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLXN1Y2Nlc3MsXG4uYmctc3VjY2Vzcyxcbi5iYWRnZS1zdWNjZXNzLFxuLmFsZXJ0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzLWNvbG9yKTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4td2hpdGUsXG4uYmctd2hpdGUsXG4uYmFkZ2Utd2hpdGUsXG4uYWxlcnQtd2hpdGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyOiAjY2NjIHNvbGlkIDFweDtcbn1cblxuLmJ0bjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmJnLWxpZ2h0LFxuLmJhZGdlLWxpZ2h0IHtcbiAgYm9yZGVyOiAjY2NjIHNvbGlkIDFweDtcbn1cblxuLnJvdW5kLWltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzg4ODtcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xufVxuLmZvcm0tY29udHJvbC5pbnZhbGlkIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuLmZvcm0tY29udHJvbC5pbnZhbGlkIGlucHV0IHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cbi5mb3JtLWNvbnRyb2wgLnZhbGlkYXRpb24ge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPWVtYWlsXSxcbmlucHV0W3R5cGU9cGFzc3dvcmRdLFxuaW5wdXRbdHlwZT1kYXRlXSxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjRyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG5pbnB1dFt0eXBlPXN1Ym1pdF0sXG5idXR0b24ge1xuICBmb250OiBpbmhlcml0O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50YWJsZSB0aCxcbnRhYmxlIHRkIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxudGFibGUgdGgge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuN3JlbSAycmVtO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC45O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuLm5hdmJhci5tYWluIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLWNvbG9yKTtcbn1cbi5uYXZiYXIgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm5hdmJhciBsaS5hY3RpdmUgYSB7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5uYXZiYXIgYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjQ1cmVtO1xuICBtYXJnaW46IDAgMC4yNXJlbTtcbn1cbi5uYXZiYXIgYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Maxim Reznikov\source\repos\AngularApp\AngularApp\AngularApp\ClientApp\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);