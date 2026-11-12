// 網站共用設定：產品名稱、聯絡方式等改這裡就會套用到全站
// 會隨語系變動的文字放在 i18n/locales/*.json
export default defineAppConfig({
  site: {
    productName: 'HR Cloud',
    contactEmail: 'sales@example.com',
    // 提案用的示意客戶（首屏下的客戶 logo、客戶案例卡）。公司、人名、引言與數字全是虛構的，
    // 頁面上會標示「示意資料」。對外正式上線前改成 false，或換成已取得授權的真實客戶。
    mockProof: true,
  },
})
