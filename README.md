# Hide X For You

X.com ana sayfasındaki **"Sana özel" (For you)** sekmesini gizleyen ve otomatik olarak **"Takip edilenler" (Following)** akışına geçen bir Chrome eklentisi.

## Özellikler

- "For you" sekmesi sayfa çizilmeden CSS ile gizlenir, bir an bile görünmez.
- "For you" seçiliyse otomatik olarak "Following"e geçilir. Geçiş tamamlanana kadar akış gizli tutulur, böylece önerilen gönderiler görünmez.
- Dilden bağımsızdır: sekme adıyla değil, sırasıyla bulunur. X Türkçe de olsa İngilizce de olsa çalışır.
- Yalnızca `/home` sayfasında devreye girer. Keşfet, profil gibi sayfalardaki sekmelere dokunmaz.
- Hiçbir izin istemez, veri toplamaz.

## Kurulum

1. Repoyu indir: `git clone https://github.com/ahmethedev/hide-x-for-you.git`
2. Chrome'da `chrome://extensions` adresini aç.
3. Sağ üstten **Geliştirici modu**nu aç.
4. **Paketlenmemiş öğe yükle**'ye tıklayıp indirdiğin klasörü seç.

X sekmesi açıksa eklentiyi yükledikten sonra sayfayı yenile.

## Nasıl çalışır?

| Dosya | Görev |
| --- | --- |
| `manifest.json` | Eklentiyi `x.com` ve `twitter.com` üzerinde, sayfa yüklenmeye başlar başlamaz çalıştırır. |
| `content.css` | Ana sayfa sekme listesinin ilk elemanını ("For you") gizler. |
| `content.js` | `/home`'da olup olmadığını izler ve "For you" seçiliyse "Following"e tıklar. X tek sayfalı bir uygulama olduğu için sayfa geçişlerini `MutationObserver` ile yakalar. |

## Bilinen sınırlamalar

Eklenti X'in sayfa yapısına dayanır: ana sayfadaki sekme listesinin ilk sekmesinin "For you" olduğunu varsayar. X sekme sırasını ya da sayfa yapısını değiştirirse eklentinin güncellenmesi gerekebilir.
