import { connectToDb } from "@/db/connection";
export async function GET(request: Request) {
    const db = await connectToDb()

    const products = [
        {
            "sku": "GGOEAFKA087499",
            "name": "Android Small Removable Sticker Sheet",
            "description": "Show your Android pride by placing these 8 fun stickers on your technology products or accessories!",
            "features": "<p>8 Android stickers</p>\n<p>White colored sticker sheet</p>",
            "price": "2.99",
            "keywords": "Android Small Removable Sticker Sheet, android stickers, sticker sheets, removable sticker sheets, small sticker sheet, android small sticker sheets, Android Sheet",
            "url": "Android+Small+Removable+Sticker+Sheet",
            "category": "accessories",
            "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png"
        },{
            "sku": "GGOEWXXX0827",
            "name": "Waze Women's Short Sleeve Tee",
            "description": "Made of soft tri-blend jersey fabric, this great t-shirt will help you find your Waze. Made in USA.",
            "features": "<p>Jersey knit</p>\n<p>37.5% cotton, 50% polyester, 12.5% rayon</p>\n<p>Made in the USA</p>",
            "price": "18.99",
            "keywords": "Waze Women's Short Sleeve Tee, Waze Short Sleeve Tee, Waze Women's Tees, Waze Women's tee, waze ladies tees, waze ladies tee, waze short sleeve tees, waze short sleeve tee",
            "url": "Waze+Womens+Short+Sleeve+Tee",
            "category": "apparel",
            "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png"
        },{
            "sku": "GGOEGEBK094499",
            "name": "Google Bot",
            "description": "This Google Bot can hold multiple poses making it a fun toy for all. Fold the Google Bot back up into a perfect cube when you are done playing.",
            "features": "<p>Made of wood</p>\n<p>2.5 x 2.5 inch cube</p>\n<p>6.75 inch tall</p>\n<p>Recommended for Ages 3+</p>",
            "price": "9.99",
            "keywords": "Google Bot, google bot, bots, natural bots, wood bot, google wood bot",
            "url": "Google+Bot",
            "category": "accessories",
            "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png"
        },{
            "sku": "GGOEGFKA086699",
            "name": "Google Emoji Sticker Pack",
            "description": "Who doesn't use emojis? Decorate your space with your current mood!",
            "features": "<p>Pack contains two sticker sheets</p>\n<p>Each Sheet has different emojis</p>\n<p><span>Decal dimensions should fit in a maximum sheet size of 12 3/4 x 17 1/2 inch.</span></p>",
            "price": "4.99",
            "keywords": "Google Emoji Sticker Pack, Google sticker pack, emoji sticker pack, google emoji, stickers, pack of sticker, pack of emoji stickers",
            "url": "Google+Emoji+Sticker+Pack+2+sheet",
            "category": "accessories",
            "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/enduro-boa-hydration-pack-AJQZ_JK3_hero.png"
        },{
            "sku": "GGOEWCKQ085457",
            "name": "Waze Pack of 9 Decal Set",
            "description": "Can't decide which Waze decal to get? We have made that decision easier for you! Now you can purchase a pack of nine Waze Mood Decals!",
            "features": "<p>Pack of 9 includes:</p>\n<p>3 Waze Mood Happy decals</p>\n<p>3 Waze Mood Original decals</p>\n<p>3 Waze Mood Ninja decals</p>",
            "price": "16.99",
            "keywords": "Waze Pack of 9 Decal Set, decals pack, packs of 9, Waze Packs, Waze Decals, waze, Waze",
            "url": "Waze+Pack+of+9+decal+set",
            "category": "accessories",
            "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png"
        },{
            "sku": "GGOEGHPB071610",
            "name": "Google Twill Cap",
            "description": "Classic urban styling distinguishes this Google cap. Retains its shape, even when not being worn.",
            "features": "<p>Heavy weight brushed twill</p>\n<p>Adjustable velcro closure</p>\n<p>One size fits all</p>",
            "price": "10.99",
            "keywords": "Google Twill Cap, Google Cap, Google Twill Caps, Google Twill, google cap, google caps, google twill, google twill black cap, google black caps, google caps, black caps, Google Caps",
            "url": "Google+Twill+Cap",
            "category": "apparel",
            "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png"
        },{
            "sku": "GGOEGHPJ094299",
            "name": "Google Fold-over Beanie Grey",
            "description": "Keep you ears warm while enjoying a cold winter day with this Google Fold-over Beanie.",
            "features": "<p>100% acrylic</p>\n<p>One size fits all</p>",
            "price": "9.99",
            "keywords": "Google Fold-over Beanie Grey, gray beanie, grey beanie, Google Beanies, Fold over grey, Google Beanie Grey, Google headgear",
            "url": "Google+Fold+over+beanie+grey",
            "category": "apparel",
            "image": "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png"
        }
    ]

    try {
        products.map(async (product) => {
            let values = [[
                product.sku,
                product.name,
                product.description,
                product.features,
                product.price,
                product.keywords,
                product.url,
                product.category,
                product.image
            ]]
            const rs = await db.query(
                "INSERT INTO products (sku, name, description, features, price, keywords, url, category, image) VALUES ?",
                [values]
            )
        })
        return Response.json({mess: "ok"})
    } catch (e) {
        console.log(e)
    }
}