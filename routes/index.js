const express = require("express");
const router = express.Router();

const DEBUG = require("../config");

const product = {
  Product: "A",
  User_main_image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoSS-J71MsJN8sgouv1KRM4G_VMRg4Vfv1i8wV_2aajaVHSSc7Dg",
  Greetings: [
    {
      Header_text: "Quod dolorem doloremque volupt",
      Message_text:
        "Quaerat iste vel et exercitationem dolor. Qui soluta est recusandae et facere molestiae. Voluptates rem unde iste voluptatibus et qui. Incid",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "placeat"
    },
    {
      Header_text: "Saepe et qui architecto.",
      Message_text:
        "Suscipit et qui quas placeat reiciendis nisi vero velit. Est nihil non animi. Optio deleniti maiores sit aliquid.",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "maxime"
    },
    {
      Header_text: "Ut molestias assumenda ratione",
      Message_text:
        "Et molestias et voluptates perspiciatis illo ut. Numquam id dolor velit et possimus. Autem libero nisi qui quod dicta voluptate eos et iste.",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "facilis"
    },
    {
      Header_text: "Ullam laborum occaecati corrup",
      Message_text:
        "Eos harum officia enim aut ullam sint necessitatibus aliquam. A facilis totam in. Occaecati doloribus perspiciatis vel maiores qui. Est est ",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "molestiae"
    },
    {
      Header_text: "Adipisci reprehenderit ab.",
      Message_text:
        "Similique voluptatem quidem necessitatibus fugit velit rerum iure. Excepturi adipisci ipsam. Odio fugiat aperiam veritatis. Sapiente explica",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "et"
    },
    {
      Header_text: "Earum fugit nemo ducimus velit",
      Message_text:
        "Omnis fugiat totam ut iste minus earum et velit. Quod ut corrupti. Reiciendis explicabo est non voluptatem quis. Esse id nesciunt non.",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "est"
    },
    {
      Header_text: "Magnam incidunt quae.",
      Message_text:
        "Minus sint assumenda ut suscipit. Quia commodi voluptatem qui accusantium sint ad. Explicabo rem est est porro. Doloremque porro et pariatur",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "similique"
    },
    {
      Header_text: "Ratione doloremque facilis at ",
      Message_text:
        "Dolor id tenetur corrupti. Est nam quaerat accusantium. Quae iure cum veniam explicabo saepe aliquid velit. Inventore animi ad recusandae al",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "omnis"
    },
    {
      Header_text: "Sapiente asperiores in iusto f",
      Message_text:
        "Minima ex delectus voluptatem sapiente. Eum sed rerum voluptatem corporis molestias eaque. Occaecati reiciendis minima repellat. Rerum error",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "sint"
    },
    {
      Header_text: "Ullam soluta a nostrum aut deb",
      Message_text:
        "Quae consequatur qui sit. Cupiditate rerum quis vero animi ipsam qui et. Quas quae nihil consequuntur earum. At et qui vel.",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "distinctio"
    },
    {
      Header_text: "Magnam placeat et ea tempore.",
      Message_text:
        "Voluptas molestiae qui molestiae non non qui consequatur. Et sint voluptas praesentium. Consequatur in magnam molestiae qui dolor ducimus fu",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "dignissimos"
    },
    {
      Header_text: "Eum et voluptas amet.",
      Message_text:
        "Dolor et alias molestias. Dolore est soluta qui est consequatur consectetur. Nihil exercitationem praesentium alias dolores sint.",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "impedit"
    },
    {
      Header_text: "Quos quo facere ipsam mollitia",
      Message_text:
        "Voluptatem hic quis magnam qui minima. Expedita accusamus illum eveniet ut itaque blanditiis est. Totam sed magni explicabo qui. Quidem aliq",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "beatae"
    },
    {
      Header_text: "Repudiandae ullam optio sequi ",
      Message_text:
        "Aut qui recusandae a blanditiis quo consequatur quia. Qui dolor aut commodi consequatur qui. Ea eos quo quis sint consequatur possimus. Qui ",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "et"
    },
    {
      Header_text: "Rem nesciunt autem saepe qui d",
      Message_text:
        "Repellendus neque iure qui rem ut itaque sit dolores voluptatum. Ipsum voluptatum quidem odit occaecati et culpa tenetur eum reiciendis. Ex ",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "et"
    },
    {
      Header_text: "Amet aut aliquid.",
      Message_text:
        "Ut ad asperiores et modi. Nemo animi incidunt aperiam tempora. Voluptates illum voluptatum id qui voluptates quo assumenda. Tenetur fuga et ",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "iure"
    },
    {
      Header_text: "Qui illo et sint.",
      Message_text:
        "Est et aut veritatis. Omnis velit suscipit sit omnis amet et soluta. Rem alias mollitia repellat et quis consequatur voluptatem omnis. Earum",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "commodi"
    },
    {
      Header_text: "Nostrum ex et et quae et conse",
      Message_text:
        "Sint illum accusantium. Est temporibus sapiente aliquam molestiae libero soluta nihil deleniti in. Inventore quo magni aut aut id sunt adipi",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "alias"
    },
    {
      Header_text: "Assumenda tenetur ut nihil eaq",
      Message_text:
        "Sunt nobis beatae facilis molestias alias eos qui non. Praesentium recusandae neque aspernatur rem ut vel ullam at. Distinctio dolore odio a",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "nostrum"
    },
    {
      Header_text: "Occaecati provident ut corpori",
      Message_text:
        "Quia amet ut ullam aliquam necessitatibus. Eos dicta error eligendi. Voluptatem aspernatur iure aut ex dolor possimus voluptatum qui.",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "ut"
    },
    {
      Header_text: "Consequatur nam ipsa in saepe ",
      Message_text:
        "Non iste et. Tempore corrupti voluptas nihil. Nam praesentium fuga itaque qui labore. Inventore pariatur quae qui. Quis doloremque ipsam ut ",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "quia"
    },
    {
      Header_text: "Alias quia dolor non repellat ",
      Message_text:
        "Non temporibus est. Consectetur fuga dolores dolorum incidunt voluptatem et qui. Reiciendis illo a maiores sint.",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "et"
    },
    {
      Header_text: "Aut omnis porro assumenda dolo",
      Message_text:
        "Reprehenderit ut sequi. Asperiores facilis consequatur distinctio ex. Reiciendis sequi ea.",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "omnis"
    },
    {
      Header_text: "Excepturi ut aspernatur.",
      Message_text:
        "Qui qui suscipit consequatur earum magni maxime explicabo. Quod in qui tempore consequatur reiciendis aliquid ullam delectus quos. Qui enim ",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "neque"
    },
    {
      Header_text: "Doloremque hic distinctio.",
      Message_text:
        "Minus labore alias sunt voluptas nisi alias et. Repellat perspiciatis officiis quod cupiditate quia non placeat nihil ut. Animi nihil ut. Qu",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "enim"
    },
    {
      Header_text: "Harum atque aspernatur accusan",
      Message_text:
        "Totam laborum accusamus modi impedit dolor sed perferendis omnis aut. Suscipit et qui minus harum quidem minus neque molestias. Numquam moll",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "animi"
    },
    {
      Header_text: "Et atque pariatur doloremque e",
      Message_text:
        "Et ipsum autem molestias dignissimos impedit inventore occaecati sint. Odit nesciunt vel eligendi facilis asperiores eligendi saepe dolorem.",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "doloremque"
    },
    {
      Header_text: "Voluptas nihil in nobis et omn",
      Message_text:
        "Sed quis repellendus. Aut commodi perspiciatis tenetur delectus sed ipsa rerum blanditiis. Optio ducimus alias. Perspiciatis doloremque cumq",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "iusto"
    },
    {
      Header_text: "Recusandae unde sint.",
      Message_text:
        "Ut repellat asperiores libero nemo. Quisquam nisi sit enim dignissimos quos quia velit eum. Dolorem quia totam ut esse.",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "expedita"
    },
    {
      Header_text: "Perspiciatis veritatis tenetur",
      Message_text:
        "Velit illum quae et rerum libero. Voluptas vero officiis id sapiente inventore rem rem in eum. Rerum recusandae qui sed rem. Deserunt quas d",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "sint"
    },
    {
      Header_text: "Aut officia molestiae libero e",
      Message_text:
        "Rerum tenetur voluptatem qui est. Est magnam autem consectetur. Est incidunt voluptates doloribus eos esse ducimus sed sunt sapiente. Debiti",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "exercitationem"
    },
    {
      Header_text: "Assumenda iusto autem.",
      Message_text:
        "Numquam eos facere dolorem. Accusamus ea dolores. Et harum inventore reprehenderit dolores sint itaque deleniti provident eum. Beatae mollit",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "at"
    },
    {
      Header_text: "Et molestiae officia explicabo",
      Message_text:
        "Dolor sint ea ut et amet provident aperiam. Odit dolores omnis qui exercitationem consequuntur porro et. Quibusdam repudiandae maxime.",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "adipisci"
    },
    {
      Header_text: "Consectetur voluptates adipisc",
      Message_text:
        "Facere sit et at quod saepe autem. Dolores odio est nulla laudantium. Ea ipsa et sed nobis necessitatibus qui dicta voluptatem est. Officia ",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "et"
    },
    {
      Header_text: "Voluptatem aut laborum dolorem",
      Message_text:
        "Eum non rerum odio officia exercitationem vel veniam reprehenderit eveniet. Explicabo similique et exercitationem ipsam. Ipsum assumenda rei",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "reiciendis"
    },
    {
      Header_text: "Voluptatem quasi laborum est i",
      Message_text:
        "Impedit totam est amet. Accusantium est eius. Reprehenderit est odit iste sit vero. Et hic explicabo sint in mollitia. Et harum at dolorum o",
      User_signer_image_url:
        "https://www.wonderplugin.com/videos/demo-image0.jpg",
      Signature_text: "veritatis"
    }
  ]
};

const puppeteer = require("puppeteer");
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function imagesHaveLoaded() {
  return Array.from(document.images).every(i => i.complete);
}

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "GreetDrops" });
});

router.get("/demo", function(req, res, next) {
  res.render("demo", { title: "GreetDrops Demo" });
});
router.get("/screenshot", function(req, res, next) {
  puppeteer.launch().then(async browser => {
    try {
      const path = `/images/product_${new Date().getTime()}.jpg`;
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto("https://greetdrops.herokuapp.com/generator", {
        waitUntil: "networkidle0"
      });

      await page.waitForFunction(imagesHaveLoaded, { timeout: 10000 });
      await timeout(5000);
      await page.screenshot({
        path: './public'+path,
        clip: { x: 0, y: 0, width: 6000, height: 3000 }
      });
      await browser.close();
      res.redirect(path);
    } catch (error) {
      res.send(error);
    }
  });
});

router.get("/generator", function(req, res, next) {
  // res.json(product)
  res.render("generator", { title: "GreetDrops Demo", product: product });
});

router.get("/generate_image", function(req, res, next) {
  if (DEBUG) {
    return res.redirect("/images/image.jpg");
  }
  return res.json({ hello: "world" });
});

module.exports = router;


