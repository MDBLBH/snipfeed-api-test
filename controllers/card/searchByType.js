const { Card } = require('../../models')

// searchAll looks for all cards matching the keywords in all card types.

module.exports = async function searchAll (req, res) {
  const {
    query: { keywords, limit, skip },
    params: { type }
  } = req
  //  TODO: Abastract this into a seperate function
  const cards = await Card.searchByCardType(
    type.toUpperCase(),
    keywords,
    limit,
    skip
  )

  return res.status(200).send(cards)
}

/**
 * @api {GET} /cards/:type?keywords=&limit=&skip=  Search Card by type.
 * @apiParam {int} limit Results Limits.
 * @apiParam {int} skip Results to Skip.
 * @apiParam {string} keyword Search keyword
 * @apiParam {string=[news,podcast,video,videovertical]} type Card type
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *
[
    {
        "card": {
            "title": "Neymar! Neymar! Neymar! Brazil star on Barcelona minds after disaster in Bilbao"
        },
        "categories": [],
        "tags": [
            "antoine.griezmann",
            "barcelona",
            "camp.nou",
            "marcandre",
            "signing",
            "neymar",
            "unai.lopez",
            "philippe.coutinho",
            "luis.suarez",
            "woodwork",
            "brazilian",
            "numancia",
            "saintgermain",
            "lionel.messi",
            "athletic.bilbao",
            "stegen",
            "chunk",
            "evergreen.38yearold.athletic",
            "sensational",
            "psg",
            "defender",
            "overreact",
            "striker",
            "french",
            "treble",
            "neymar",
            "neymar",
            "neymar",
            "brazil",
            "star",
            "barcelona",
            "minds",
            "disaster",
            "bilbao"
        ],
        "intents": [
            [
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "”chanted gathered <a href = https://www.goal.com/en-us/team/barcelona/agh9ifb2mw3ivjusgedj7c3fe > Barcelona </a> fans at president Josep Maria Bartomeu as he arrived with the team to a Bilbao hotel before their opening <a href = https://www.goal.com/en-us/primera-divisi%C3%B3n/34pl8szyvrbwcmfkuocjm3r6t > La Liga </a> clash on Friday."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "And the Brazilian striker’s name was on the Catalan club’s mind at the end of the night too, after a painful 1-0 defeat by Athletic Bilbao at the San Mames, as Luis Suarez went off injured."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "Evergreen 38-year-old Athletic striker Aritz Aduriz scored a sensational scissor-kick winner in the final stages, showing the cutting edge Barcelona lacked with his first touch after coming on as a substitute."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "Barcelona desperately missed captain Lionel Messi and struggled to break down the impressive Basque side in a tight clash, despite summer signing Antoine Griezmann making his debut for the visitors."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "The French forward showed the willingness to work defensively that made him such a favourite of Diego Simeone at <a href = https://www.goal.com/en-us/team/atl%C3%A9tico-madrid/4ku8o6uf87yd8iecdalipo6wd > Atletico Madrid </a> , although he spent too much time in those areas for Barcelona’s liking."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "Athletic were better for most of the game and Marc-Andre ter Stegen made some smart stops from Inaki Williams and Raul Garcia, although Barcelona twice hit the woodwork."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "Suarez struck the post after Unai Lopez’s haphazard pass-back found the Uruguayan alone in the Athletic area, but he was already limping by that point with a calf injury and was soon replaced by Rafinha."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "The Brazilian, who may well leave Barcelona before the transfer window shuts, crashed an effort against the crossbar via the hand of Unai Simon."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "Rafinha showed nice skill, invention and good link play after the break and, if Barcelona could guarantee that he will remain injury-free, would be a fine option to have in reserve for the attack."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "Unfortunately, history has shown the Brazilian is eminently breakable and the Catalans cannot rely on him to stay fit."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "Instead, they continue to push for his compatriot to return to Camp Nou, while pushing another out the door."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "Barcelona director Guillermo Amor said before the game that the club had reached the basis of a deal with <a href = https://www.goal.com/en-us/team/bayern-m%C3%BCnchen/apoawtpvac4zqlancmvw4nk4o > Bayern Munich </a> for Philippe Coutinho to leave on loan, ending a painful year-and-a-half spell for the former <a href = https://www.goal.com/en-us/team/liverpool/c8h9bw1l82s06h77xxrelzhur > Liverpool </a> player in <a href = https://www.goal.com/en-us/team/spain/eh7yt2x2wck51oixw8012ux5j > Spain </a> ."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "Coutinho’s departure will clear a big chunk from the wage bill, creating space for Neymar’s potential return two years after leaving for PSG for a world-record fee."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "It is important for Barcelona not to overreact. This loss is just the first match of 38 and, of course, the team is not fully up to speed yet, especially not without talisman and star player Messi."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "After all, the last time Barcelona lost the first game of the season was under Pep Guardiola in 2008, a 1-0 defeat by Numancia at the start of a campaign that saw them win an historic treble."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "And yet, when Carles Perez came on for Sergi Roberto for the final 15 minutes, it did exemplify why Barcelona are battling to bring Neymar ‘home’."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "It was impossible not to recall the Brazilian and his box of tricks in his first era at Barcelona while watching Griezmann and Ousmane Dembele struggle to beat Athletic defenders."
                        ]
                    }
                },
                {
                    "type": "text",
                    "data": {
                        "text": [
                            "��Check the link below for the full article ��!"
                        ]
                    }
                }
            ]
        ],
        "_id": "5e2ae3b748ce814fc6ac1cf2",
        "type": "NEWS",
        "createdBy": "6420207c12e3c456d673173bf9335f7b0e22d08bb6280ef7a926d2043d208eafaa171f0864b8f196ceee7d4d75308dcf114424ff2c4e0a2bce70e1fd98627400",
        "createdAt": "08/16/2019, 21:21:25",
        "score": 46.866666666666674
    }
]
 * @apiVersion 1.0.0
 * @apiUse ServerError
 * @apiUse ValidationError

 * @apiErrorExample {json} ValidationError:
 *     HTTP/1.1 400 Bad Request
    {
        "error": "ValidationError",
        "details": [
            {
                "location": "query",
                "param": "keywords",
                "value": "",
                "msg": "Invalid value"
            }
        ]
    }
 * @apiGroup Card
 */
