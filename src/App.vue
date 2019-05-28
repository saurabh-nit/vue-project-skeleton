<template>
  <div id="app">
    <router-view/>
    <error-popup
      :isErrorPopupVisible= "errors.isErrorPopupVisible"
      :errorList= "errors.errorList"
    ></error-popup>
  </div>
</template>
<script src="./App.js"></script>
