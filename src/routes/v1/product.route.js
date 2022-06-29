const { Router } = require("express");
const controller = require("../../controllers/product.controller");

const router = Router();

router.get("/group-category/slug/:slug", controller.getByGroupCategorySlug);
router.get("/category/slug/:slug", controller.getByCategorySlug);
router.get("/group-product/slug/:slug", controller.getByGroupProductSlug);
router.get("/slug/:slug", controller.getBySlug);
router.get("/search", controller.search);
router.get("/", controller.getAll);

router.post("/", controller.create);

router.delete("/:id", controller.destroy);

router.put("/:id", controller.update);

module.exports = router;
