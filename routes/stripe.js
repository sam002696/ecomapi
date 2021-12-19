const router = require("express").Router();
const stripe = require("stripe")("sk_test_51K7lxVIeVX9uUZGTKTBbr88x0SB96ypyCzwKaLbu72mOfJ5bvpMHZ6PO0SK7K7NY79xUEDudIPwQklO7kMnhWVXX00ls1urreQ");

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

module.exports = router;
