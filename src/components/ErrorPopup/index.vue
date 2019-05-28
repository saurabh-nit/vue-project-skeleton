<template>
    <transition-component effectName="fade-effect">
        <overlay-component v-if="isErrorPopupVisible">
            <div class="error-popup-base">
                <h3>Errors</h3>
                 <ul>
                    <li v-for="error in errorList" :key="error.key">
                        {{error.message}}
                    </li>
                 </ul>
                 <div class="col-md-2 offset-md-10">
                <button @click="disablePopup" class="btn btn-primary">OK</button>
            </div>
            </div>
        </overlay-component>
    </transition-component>
</template>

<style lang="scss" src="./ErrorPopup.scss"></style>
<script src="./ErrorPopup.js"></script>
