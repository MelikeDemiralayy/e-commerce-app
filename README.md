
# E Commerce App
Next.js ile oluşturulmuş bir e-ticaret uygulamasıdır.

 ![ecommerce](https://github.com/MelikeDemiralayy/e-commerce-app/assets/147873534/d52a3bd3-203c-4ad6-90ac-8ae25447238c)
 ![e-commerce](https://github.com/MelikeDemiralayy/e-commerce-app/assets/147873534/d5ae189b-55d7-470e-b750-0534cde88c8d)


## Yükleme 
Gerekli paketlerin yüklenmesi

```bash 
  npm install 
```
Projeyi başlatılması
```bash 
  npm run dev
```
Uygulama, varsayılan olarak http://localhost:3000 adresinde çalışacaktır.

Json server'ın başlatılması
```bash 
  npm run json-server
```
JSON Server, http://localhost:3001 adresinde çalışacaktır ve sahte verilerle API isteklerini karşılayacaktır.
##  Proje Yapısı
### Sayfa Bileşenleri
Proje, sayfa bileşenleri için `pages/` klasörü içerir. Her sayfa, uygulamanın belirli bir bölümünü temsil eder.

### Componentler
Genel kullanım için olan componentler `components/` klasörü içinde yer alır. Bu bileşenler, sayfalar arasında paylaşılabilir ve yeniden kullanılabilir olmalıdır. Örneğin, Navbar,Card, Footer gibi genel bileşenler burada yer alabilir.

### Redux State Yönetimi
Redux Toolkit kullanılarak global state yönetimi sağlanır. Sepet içeriği, kullanıcı bilgileri gibi veriler bu global stateler üzerinden yönetilir.

### Formik ve Yup Kullanımı
Formik ve Yup, form işlemleri ve validasyonları için kullanılır. Kullanıcı girişleri, güvenli bir şekilde yönetilir ve doğrulanır.

### API İstekleri
Axios kullanılarak API istekleri gerçekleştirilir. API istekleri, api/ klasörü altında düzenlenir.


## Kullanım Senaryoları
### Ürünleri İnceleme
Uygulamada yer alan ürünleri inceleyebilir ve detaylarına ulaşabilirsiniz.

## Sepet İşlemleri
Ürünleri sepete ekleyebilir, sepet içeriğini görüntüleyebilir, sepetten ürün silebilir ve toplam tutarı görebilirsiniz.

## Ürün Ekleme ve Düzenleme
Yönetici olarak, yeni ürün ekleyebilir ve bu ürünü uygulamaya dahil edebilirsiniz.Var olan ürüne güncelleme yapabilirsiniz. 



  
## Kullanılan Teknolojiler
- [Next.js](https://nextjs.org/) - React tabanlı web uygulamaları için bir framework.
- [Redux Toolkit](https://redux-toolkit.js.org/) - State yönetimi için önerilen bir Redux kütüphanesi.
- [Formik](https://formik.org/) - Form işlemleri için kullanılan bir React kütüphanesi.
- [Yup](https://github.com/jquense/yup) - Şema tabanlı form validasyonu için kullanılan bir kütüphane.
- [Axios](https://axios-http.com/) - HTTP istekleri yapmak için kullanılan bir kütüphane.
- [JSON Server](https://github.com/typicode/json-server) - Sahte verilerle çalışmak için kullanılan bir JSON tabanlı REST API sunucusu.


 



  
