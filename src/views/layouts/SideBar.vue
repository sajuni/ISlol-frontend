<template>
   <div>
      <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow visible>
         <template>
         <div class="p-3">
            <h4 id="sidebar-no-header-title">ISLOL - ADMIN</h4>
            <p>
               관리자페이지
            </p>
            <nav class="mb-3">
               <b-nav vertical>
               <b-nav-item>미디어관리</b-nav-item>
               <b-nav-item>Link</b-nav-item>
               <b-nav-item>Another Link</b-nav-item>
               </b-nav>
            </nav>
         </div>
         </template>
      </b-sidebar>
      <slot />
  </div>
</template>