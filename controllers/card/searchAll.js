const { Card } = require('../../models')
const { CARD_TYPES } = require('../../config/constants')
const getCategoriesList = require('../../helpers/card/getCategoriesList')
// searchAll looks for all cards matching the keywords in all card types.

module.exports = async function searchAll (req, res) {
  const {
    query: { keywords, limit, skip }
  } = req
  //  TODO: - Abastract this into a seperate function
  //        - See if it's possible to group everything into one request using Aggregation
  const [news, videos, podcasts, verticalVideos] = await Promise.all([
    Card.searchByCardType(CARD_TYPES.NEWS, keywords, limit, skip),
    Card.searchByCardType(CARD_TYPES.VIDEO, keywords, limit, skip),
    Card.searchByCardType(CARD_TYPES.PODCAST, keywords, limit, skip),
    Card.searchByCardType(CARD_TYPES.VIDEOVERTICAL, keywords, limit, skip)
  ])

  const categories = getCategoriesList([
    ...news,
    ...videos,
    ...podcasts,
    ...verticalVideos
  ])

  return res
    .status(200)
    .send({ news, videos, podcasts, verticalVideos, categories })
}

/**
 * @api {GET} /cards/?keywords=&limit=&skip=  Search All Card Types.
 * @apiParam {int} limit Results Limits.
 * @apiParam {int} skip Results to Skip.
 * @apiParam {string} keyword Search keyword
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *
{
    "news": [
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
    ],
    "videos": [
        {
            "card": {
                "title": "Neymar stripped of Brazil captaincy: He's too much of a showman - Stewart Robson | Copa America"
            },
            "categories": [],
            "tags": [
                "dani",
                "brazil",
                "neymar vs",
                "neymar punches fan",
                "neymar",
                "espn fc",
                "dani alves",
                "neymar",
                "fifa world cup",
                "champions league",
                "2019 copa america",
                "uefa champions league",
                "captain",
                "psg",
                "tite",
                "paris saint germain",
                "neymar captain brazil",
                "neymar skills",
                "brazil",
                "robson",
                "copa america",
                "neymar dive",
                "neymar reaction to psg loss",
                "strip",
                "futbol",
                "neymar reaction",
                "stewart.robson",
                "neymar captaincy",
                "neymar jr",
                "espnfc",
                "dan.thomas",
                "neymar captain",
                "dan thomas",
                "stewart robson",
                "player",
                "espn",
                "copa america 2019",
                "2018 fifa world cup",
                "futboll",
                "football",
                "armband",
                "soccer on espn"
            ],
            "intents": [
                [
                    {
                        "type": "text",
                        "data": {
                            "text": [
                                "Stewart Robson and Dan Thomas of ESPN FC react to the news Neymar has been stripped of the captaincy for Brazil ahead of the 2019 Copa America, with Tite giving the captain's armband to PSG's Dani Alves instead. Robson explains why he never would have given Neymar the captain's armband in the first place because he's a \"great individual player, but not a team player.\""
                            ]
                        }
                    }
                ]
            ],
            "_id": "5e2ae47348ce814fc6b7d423",
            "type": "VIDEO",
            "createdAt": "05/28/2019, 00:00:00",
            "createdBy": "3c18b817caa1269e2cb6433bd7d9df16e385a5aac6c0ccf11520de646fe22fac5b5c7655012b15aeb9537043ca3111c2a0447306f46aae15a1ce9a6fedbdd8d3",
            "score": 80.76666666666668
        }
    ],
    "podcasts": [
        {
            "card": {
                "title": "Neymar Staying in Paris?",
                "subtitle": "The FC Crew discuss Neymar possibly extending his PSG contract, Ronaldo making the UEFA Team of the Year and Inter's winter moves."
            },
            "categories": [],
            "tags": [
                "neymar",
                "psg",
                "staying",
                "paris",
                "ronaldo",
                "fc",
                "neymar staying",
                "inter"
            ],
            "intents": [
                [
                    {
                        "type": "text",
                        "data": {
                            "text": [
                                "The FC Crew discuss Neymar possibly extending his PSG contract, Ronaldo making the UEFA Team of the Year and Inter's winter moves."
                            ]
                        }
                    }
                ]
            ],
            "_id": "5e2ae3f948ce814fc6ae5f1a",
            "type": "PODCAST",
            "createdBy": "9d2ba297572ad5fea4b1498077541fab15394f11c9fb287926d80b060cc4cf045d50943a2bafe941b7c4b9253bb16a046ebf7db6479f483bb513521267ec6efe",
            "createdAt": "01/16/2020, 15:35:00",
            "score": 25.71666666666667
        }
    ],
    "verticalVideos": [
        {
            "card": {
                "title": "��NEYMAR MOVIE��\n���������� �������� NEYMAR ������������ ������������s☝��\n#neymar #neymarjr #p..."
            },
            "categories": [],
            "tags": [
                "",
                "oyununiversitesi",
                "efootball",
                "��������",
                "psg",
                "fifa",
                "neymar",
                "liketime",
                "fut20",
                "futchampions",
                "futties",
                "pes19",
                "p",
                "gamer",
                "likeforlikes",
                "fifa20",
                "������������s\nneymar",
                "������������",
                "ps4pro",
                "movie\n������",
                "pes2020",
                "likeforalways",
                "neymarjr",
                "game",
                "likeforlike",
                "fut",
                "\nefootballpes2020",
                "pesmobile2019",
                "pes20",
                "pubgmobile",
                "s\nneymar",
                "movie\n",
                "pes2019"
            ],
            "intents": [
                [
                    {
                        "type": "text",
                        "data": {
                            "text": [
                                "��NEYMAR MOVIE��\n���������� �������� NEYMAR ������������ ������������s☝��\n#neymar #neymarjr #psg \n#EFootballPES2020 #efootball #pes20 #pes2020 #pes2019 #pes19 #fifa20 #fut20 #fut #futties #futchampions #pubgmobile #pesmobile2019 #fifa #ps4pro�� #game #gamer #likeforlike #likeforlikes #likeforalways #liketime #oyununiversitesi"
                            ]
                        }
                    }
                ]
            ],
            "_id": "5e2ae48b48ce814fc6b9242f",
            "type": "VIDEOVERTICAL",
            "createdBy": "4824a65a1d7e01b23a33c0b1e1597d2268e2e13df517bf534b16b5c5d141464f522bc1c4a44a1f0c4b4ff6b22585433fec7c416de7b81176ad72047648dc845c",
            "createdAt": "11/11/2019, 14:31:34",
            "score": 29.663636363636364
        }
    ],
    "categories": []
}
 * @apiVersion 1.0.0
 * @apiUse ServerError
 * @apiUse ValidationError
 * @apiErrorExample {json} ValidationError
 *
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
