class SecondPage {
    constructor() {
        this.body = Bodies.rectangle(420, 200, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("asserts/basics/dot.png");
        World.add(world, this.body);

        this.button58 = createButton("BACK6");
        this.button57 = createButton("BACK5");
        this.button34 = createButton("SEE27");
        this.button35 = createButton("SEE28");
        this.button36 = createButton("SEE29");
        this.button37 = createButton("SEE30");
        this.button38 = createButton("SEE31");
        this.button39 = createButton("SEE32");
        this.button40 = createButton("SEE33");
        this.button41 = createButton("SEE34");
        this.button57 = createButton("BACK5");
        this.button29 = createButton("SEE23");
        this.button30 = createButton("SEE24");
        this.button31 = createButton("SEE25");
        this.button32 = createButton("SEE26");
        this.button56 = createButton("Back4");
        this.button18 = createButton("SEE13");
        this.button19 = createButton("SEE14");
        this.button20 = createButton("SEE15");
        this.button21 = createButton("SEE16");
        this.button22 = createButton("SEE17");
        this.button55 = createButton("Back3");
        this.button9 = createButton("SEE5");
        this.button10 = createButton("SEE6");
        this.button11 = createButton("SEE7");
        this.button12 = createButton("SEE8");
        this.button13 = createButton("SEE9");
        this.button54 = createButton("Back2");
        this.button4 = createButton("SEE1");
        this.button5 = createButton("SEE2");
        this.button6 = createButton("SEE3");
        this.button7 = createButton("SEE4");
        this.button53 = createButton("Back1");
        this.button3 = createButton("CLICK1");
        this.button8 = createButton("CLICK2");
        this.button17 = createButton("CLICK3");
        this.button28 = createButton("CLICK4");
        this.button33 = createButton("CLICK5");
        this.button42 = createButton('QUIZ ON SHAPES');

    }
    display() {
        this.button3.position(620, 130);
        this.button8.position(620, 170);
        this.button17.position(620, 210);
        this.button28.position(620, 250);
        this.button33.position(620, 290);
        this.button42.position(350, 450);
        this.button4.position(620, 130);
        this.button5.position(620, 170);
        this.button6.position(620, 210);
        this.button7.position(620, 250);
        this.button53.position(120, 90);
        this.button58.position(120, 90);
        this.button9.position(620, 130);
        this.button10.position(620, 170);
        this.button11.position(620, 210);
        this.button12.position(620, 250);
        this.button13.position(620, 290);
        this.button54.position(120, 90);
        this.button18.position(620, 130);
        this.button19.position(620, 170);
        this.button20.position(620, 210);
        this.button21.position(620, 250);
        this.button22.position(620, 290);
        this.button55.position(120, 90);
        this.button29.position(620, 130);
        this.button30.position(620, 170);
        this.button31.position(620, 210);
        this.button32.position(620, 250);
        this.button56.position(120, 90);
        this.button34.position(620, 130);
        this.button35.position(620, 170);
        this.button36.position(620, 210);
        this.button37.position(620, 250);
        this.button38.position(620, 290);
        this.button39.position(620, 330);
        this.button40.position(620, 370);
        this.button41.position(620, 410);
        this.button57.position(120, 90);

        this.button3.mousePressed(() => {
            if (gameState == 1) {
                gameState = 3;
                this.button3.hide();
                this.button8.hide();
                this.button17.hide();
                this.button28.hide();
                this.button33.hide();
                this.button4.show();
                this.button5.show();
                this.button6.show();
                this.button7.show();
                this.button9.hide();
                this.button10.hide();
                this.button11.hide();
                this.button12.hide();
                this.button13.hide();
                this.button18.hide();
                this.button19.hide();
                this.button20.hide();
                this.button21.hide();
                this.button22.hide();
                this.button29.hide();
                this.button30.hide();
                this.button31.hide();
                this.button32.hide();
                this.button34.hide();
                this.button35.hide();
                this.button36.hide();
                this.button37.hide();
                this.button38.hide();
                this.button39.hide();
                this.button40.hide();
                this.button41.hide();
                this.button42.hide();
                this.button53.hide();
                this.button54.hide();
                this.button55.hide();
                this.button56.hide();
                this.button57.hide();
            }
        });

        this.button8.mousePressed(() => {
            if (gameState == 1) {
                gameState = 4;
                this.button3.hide();
                this.button8.hide();
                this.button17.hide();
                this.button28.hide();
                this.button33.hide();
                this.button4.hide();
                this.button5.hide();
                this.button6.hide();
                this.button7.hide();
                this.button9.show();
                this.button10.show();
                this.button11.show();
                this.button12.show();
                this.button13.show();
                this.button14 = createButton("SEE10");
                this.button14.position(620, 330);
                this.button14.mousePressed(() => {
                    if (gameState == 4) {
                        gameState = 17;
                        this.button9.hide();
                        this.button10.hide();
                        this.button11.hide();
                        this.button12.hide();
                        this.button13.hide();
                        this.button14.hide();
                        this.button15.hide();
                        this.button16.hide();
                        this.button54.show();
                    }
                });
                this.button15 = createButton("SEE11");
                this.button15.position(620, 370);
                this.button15.mousePressed(() => {
                    if (gameState == 4) {
                        gameState = 18;
                        this.button9.hide();
                        this.button10.hide();
                        this.button11.hide();
                        this.button12.hide();
                        this.button13.hide();
                        this.button14.hide();
                        this.button15.hide();
                        this.button16.hide();
                        this.button54.show();
                    }
                });
                this.button16 = createButton("SEE12");
                this.button16.position(620, 410);
                this.button16.mousePressed(() => {
                    if (gameState == 4) {
                        gameState = 19;
                        this.button9.hide();
                        this.button10.hide();
                        this.button11.hide();
                        this.button12.hide();
                        this.button13.hide();
                        this.button14.hide();
                        this.button15.hide();
                        this.button16.hide();
                        this.button54.show();
                    }
                });
                this.button18.hide();
                this.button19.hide();
                this.button20.hide();
                this.button21.hide();
                this.button22.hide();
                //this.button23.hide();
                //this.button24.hide();
                //this.button25.hide();
                //this.button26.hide();
                //this.button27.hide();
                this.button29.hide();
                this.button30.hide();
                this.button31.hide();
                this.button32.hide();
                this.button34.hide();
                this.button35.hide();
                this.button36.hide();
                this.button37.hide();
                this.button38.hide();
                this.button39.hide();
                this.button40.hide();
                this.button41.hide();
                this.button42.hide();
                this.button53.hide();
                this.button54.hide();
                this.button55.hide();
                this.button56.hide();
                this.button57.hide();
            }
        });

        this.button17.mousePressed(() => {
            if (gameState == 1) {
                gameState = 5;
                this.button3.hide();
                this.button8.hide();
                this.button17.hide();
                this.button28.hide();
                this.button33.hide();
                this.button4.hide();
                this.button5.hide();
                this.button6.hide();
                this.button7.hide();
                this.button9.hide();
                this.button10.hide();
                this.button11.hide();
                this.button12.hide();
                this.button13.hide();
                this.button14.hide();
                this.button15.hide();
                this.button16.hide();
                this.button18.show();
                this.button19.show();
                this.button20.show();
                this.button21.show();
                this.button22.show();
                this.button23 = createButton("SEE18");
                this.button23.position(620, 330);
                this.button23.mousePressed(() => {
                    if (gameState == 5) {
                        gameState = 25;
                        this.button18.hide();
                        this.button19.hide();
                        this.button20.hide();
                        this.button21.hide();
                        this.button22.hide();
                        this.button23.hide();
                        this.button24.hide();
                        this.button25.hide();
                        this.button26.hide();
                        this.button27.hide();
                        this.button55.show();
                    }
                });
                this.button24 = createButton("SEE19");
                this.button24.position(620, 370);
                this.button24.mousePressed(() => {
                    if (gameState == 5) {
                        gameState = 26;
                        this.button18.hide();
                        this.button19.hide();
                        this.button20.hide();
                        this.button21.hide();
                        this.button22.hide();
                        this.button23.hide();
                        this.button24.hide();
                        this.button25.hide();
                        this.button26.hide();
                        this.button27.hide();
                        this.button55.show();
                    }
                });
                this.button25 = createButton("SEE20");
                this.button25.position(620, 410);
                this.button25.mousePressed(() => {
                    if (gameState == 5) {
                        gameState = 27;
                        this.button18.hide();
                        this.button19.hide();
                        this.button20.hide();
                        this.button21.hide();
                        this.button22.hide();
                        this.button23.hide();
                        this.button24.hide();
                        this.button25.hide();
                        this.button26.hide();
                        this.button27.hide();
                        this.button55.show();
                    }
                });
                this.button26 = createButton("SEE21");
                this.button26.position(620, 450);
                this.button26.mousePressed(() => {
                    if (gameState == 5) {
                        gameState = 28;
                        this.button18.hide();
                        this.button19.hide();
                        this.button20.hide();
                        this.button21.hide();
                        this.button22.hide();
                        this.button23.hide();
                        this.button24.hide();
                        this.button25.hide();
                        this.button26.hide();
                        this.button27.hide();
                        this.button55.show();
                    }
                });
                this.button27 = createButton("SEE22");
                this.button27.position(620, 490);
                this.button27.mousePressed(() => {
                    if (gameState == 5) {
                        gameState = 29;
                        this.button18.hide();
                        this.button19.hide();
                        this.button20.hide();
                        this.button21.hide();
                        this.button22.hide();
                        this.button23.hide();
                        this.button24.hide();
                        this.button25.hide();
                        this.button26.hide();
                        this.button27.hide();
                        this.button55.show();
                    }
                });
                this.button29.hide();
                this.button30.hide();
                this.button31.hide();
                this.button32.hide();
                this.button34.hide();
                this.button35.hide();
                this.button36.hide();
                this.button37.hide();
                this.button38.hide();
                this.button39.hide();
                this.button40.hide();
                this.button41.hide();
                this.button42.hide();
                this.button53.hide();
                this.button54.hide();
                this.button55.hide();
                this.button56.hide();
                this.button57.hide();
            }
        });

        this.button28.mousePressed(() => {
            if (gameState == 1) {
                gameState = 6;
                this.button3.hide();
                this.button8.hide();
                this.button17.hide();
                this.button28.hide();
                this.button33.hide();
                this.button4.hide();
                this.button5.hide();
                this.button6.hide();
                this.button7.hide();
                this.button9.hide();
                this.button10.hide();
                this.button11.hide();
                this.button12.hide();
                this.button13.hide();
                this.button14.hide();
                this.button15.hide();
                this.button16.hide();
                this.button18.hide();
                this.button19.hide();
                this.button20.hide();
                this.button21.hide();
                this.button22.hide();
                this.button23.hide();
                this.button24.hide();
                this.button25.hide();
                this.button26.hide();
                this.button27.hide();
                this.button29.show();
                this.button30.show();
                this.button31.show();
                this.button32.show();
                this.button34.hide();
                this.button35.hide();
                this.button36.hide();
                this.button37.hide();
                this.button38.hide();
                this.button39.hide();
                this.button40.hide();
                this.button41.hide();
                this.button42.hide();
                this.button53.hide();
                this.button54.hide();
                this.button55.hide();
                this.button56.hide();
                this.button57.hide();
            }
        });

        this.button33.mousePressed(() => {
            if (gameState == 1) {
                gameState = 7;
                this.button3.hide();
                this.button8.hide();
                this.button17.hide();
                this.button28.hide();
                this.button33.hide();
                this.button4.hide();
                this.button5.hide();
                this.button6.hide();
                this.button7.hide();
                this.button9.hide();
                this.button10.hide();
                this.button11.hide();
                this.button12.hide();
                this.button13.hide();
                this.button14.hide();
                this.button15.hide();
                this.button16.hide();
                this.button18.hide();
                this.button19.hide();
                this.button20.hide();
                this.button21.hide();
                this.button22.hide();
                this.button23.hide();
                this.button24.hide();
                this.button25.hide();
                this.button26.hide();
                this.button27.hide();
                this.button29.hide();
                this.button30.hide();
                this.button31.hide();
                this.button32.hide();
                this.button34.show();
                this.button35.show();
                this.button36.show();
                this.button37.show();
                this.button38.show();
                this.button39.show();
                this.button40.show();
                this.button41.show();
                this.button42.hide();
                this.button53.hide();
                this.button54.hide();
                this.button55.hide();
                this.button56.hide();
                this.button57.hide();
            }
        });

        this.button42.mousePressed(() => {
            if (gameState == 1) {
                gameState = 42;
            }
        });

        this.button4.mousePressed(() => {
            if (gameState == 3) {
                gameState = 8;
                var pos = this.body.position;
                //push();
                //translate(this.body.position.x, this.body.position.y);
                //imageMode(CENTER);
                rect(pos.x, pos.y, this.width, this.height);
                image(this.image, 420, 200, this.width, this.height);
                //pop();

                this.button4.hide();
                this.button5.hide();
                this.button6.hide();
                this.button7.hide();
                this.button42.hide();
                this.button53.show();
            }
        });
        this.button5.mousePressed(() => {
            if (gameState == 3) {
                gameState = 9;
                this.button4.hide();
                this.button5.hide();
                this.button6.hide();
                this.button7.hide();
                this.button53.show();
            }
        });
        this.button6.mousePressed(() => {
            if (gameState == 3) {
                gameState = 10;
                this.button4.hide();
                this.button5.hide();
                this.button6.hide();
                this.button7.hide();
                this.button53.show();
            }
        });
        this.button7.mousePressed(() => {
            if (gameState == 3) {
                gameState = 11;
                this.button4.hide();
                this.button5.hide();
                this.button6.hide();
                this.button7.hide();
                this.button53.show();
            }
        });

        this.button53.mousePressed(() => {
            if (gameState != 2 && gameState != 0)
                gameState = 3;
            this.button3.hide();
            this.button8.hide();
            this.button17.hide();
            this.button28.hide();
            this.button33.hide();
            this.button4.show();
            this.button5.show();
            this.button6.show();
            this.button7.show();
            this.button9.hide();
            this.button10.hide();
            this.button11.hide();
            this.button12.hide();
            this.button13.hide();
            //this.button14.hide();
            //this.button15.hide();
            //this.button16.hide();
            //this.button18.hide();
            //this.button19.hide();
            this.button20.hide();
            this.button21.hide();
            this.button22.hide();
            //this.button23.hide();
            //this.button24.hide();
            //this.button25.hide();
            //this.button26.hide();
            //this.button27.hide();
            this.button29.hide();
            this.button30.hide();
            this.button31.hide();
            this.button32.hide();
            this.button34.hide();
            this.button35.hide();
            this.button36.hide();
            this.button37.hide();
            this.button38.hide();
            this.button39.hide();
            this.button40.hide();
            this.button41.hide();
            this.button42.hide();
            this.button53.hide();
            this.button54.hide();
            this.button55.hide();
            this.button56.hide();
            this.button57.hide();
            this.button42.hide();
            firstPageNot.setVisibleEach(false);
        });

        this.button58.mousePressed(() => {
            if (gameState != 2 && gameState != 0) {
                gameState = 1;
                this.button58.show();
                this.button4.hide();
                this.button5.hide();
                this.button6.hide();
                this.button7.hide();
                this.button9.hide();
                this.button10.hide();
                this.button11.hide();
                this.button12.hide();
                this.button13.hide();
                //this.button14.hide();
                //this.button15.hide();
                //this.button16.hide();
                this.button17.hide();
                this.button18.hide();
                this.button19.hide();
                this.button20.hide();
                this.button21.hide();
                this.button22.hide();
                //this.button23.hide();
                //this.button24.hide();
                //this.button25.hide();
                //this.button26.hide();
                //this.button27.hide();
                this.button29.hide();
                this.button30.hide();
                this.button31.hide();
                this.button32.hide();
                this.button34.hide();
                this.button35.hide();
                this.button36.hide();
                this.button37.hide();
                this.button38.hide();
                this.button39.hide();
                this.button40.hide();
                this.button41.hide();
                this.button3.show();
                this.button8.show();
                this.button17.show();
                this.button28.show();
                this.button33.show();
                firstPageNot.setVisibleEach(false);
            }
        })

        this.button9.mousePressed(() => {
            if (gameState == 4) {
                gameState = 12;
                this.button9.hide();
                this.button10.hide();
                this.button11.hide();
                this.button12.hide();
                this.button13.hide();
                this.button14.hide();
                this.button15.hide();
                this.button16.hide();
                this.button54.show();
            }
        });
        this.button10.mousePressed(() => {
            if (gameState == 4) {
                gameState = 13;
                this.button9.hide();
                this.button10.hide();
                this.button11.hide();
                this.button12.hide();
                this.button13.hide();
                this.button14.hide();
                this.button15.hide();
                this.button16.hide();
                this.button54.show();
            }
        });
        this.button11.mousePressed(() => {
            if (gameState == 4) {
                gameState = 14;
                this.button9.hide();
                this.button10.hide();
                this.button11.hide();
                this.button12.hide();
                this.button13.hide();
                this.button14.hide();
                this.button15.hide();
                this.button16.hide();
                this.button54.show();
            }
        });
        this.button12.mousePressed(() => {
            if (gameState == 4) {
                gameState = 15;
                this.button9.hide();
                this.button10.hide();
                this.button11.hide();
                this.button12.hide();
                this.button13.hide();
                this.button14.hide();
                this.button15.hide();
                this.button16.hide();
                this.button54.show();
            }
        });
        this.button13.mousePressed(() => {
            if (gameState == 4) {
                gameState = 16;
                this.button9.hide();
                this.button10.hide();
                this.button11.hide();
                this.button12.hide();
                this.button13.hide();
                this.button14.hide();
                this.button15.hide();
                this.button16.hide();
                this.button54.show();
            }
        });

        this.button54.mousePressed(() => {
            if (gameState != 2 && gameState != 0)
                gameState = 4;
            this.button3.hide();
            this.button8.hide();
            this.button17.hide();
            this.button28.hide();
            this.button33.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button9.show();
            this.button10.show();
            this.button11.show();
            this.button12.show();
            this.button13.show();
            this.button14.show();
            this.button15.show();
            this.button16.show();
            this.button18.hide();
            this.button19.hide();
            this.button20.hide();
            this.button21.hide();
            this.button22.hide();
            this.button23.hide();
            //this.button24.hide();
            //this.button25.hide();
            //this.button26.hide();
            //this.button27.hide();
            this.button29.hide();
            this.button30.hide();
            this.button31.hide();
            this.button32.hide();
            this.button34.hide();
            this.button35.hide();
            this.button36.hide();
            this.button37.hide();
            this.button38.hide();
            this.button39.hide();
            this.button40.hide();
            this.button41.hide();
            this.button53.hide();
            this.button54.hide();
            this.button55.hide();
            this.button56.hide();
            this.button57.hide();
            this.button42.hide();
            firstPageNot.setVisibleEach(false);
        });

        this.button18.mousePressed(() => {
            if (gameState == 5) {
                gameState = 20;
                this.button18.hide();
                this.button19.hide();
                this.button20.hide();
                this.button21.hide();
                this.button22.hide();
                this.button23.hide();
                this.button24.hide();
                this.button25.hide();
                this.button26.hide();
                this.button27.hide();
                this.button55.show();
            }
        });
        this.button19.mousePressed(() => {
            if (gameState == 5) {
                gameState = 21;
                this.button18.hide();
                this.button19.hide();
                this.button20.hide();
                this.button21.hide();
                this.button22.hide();
                this.button23.hide();
                this.button24.hide();
                this.button25.hide();
                this.button26.hide();
                this.button27.hide();
                this.button55.show();
            }
        });
        this.button20.mousePressed(() => {
            if (gameState == 5) {
                gameState = 22;
                this.button18.hide();
                this.button19.hide();
                this.button20.hide();
                this.button21.hide();
                this.button22.hide();
                this.button23.hide();
                this.button24.hide();
                this.button25.hide();
                this.button26.hide();
                this.button27.hide();
                this.button55.show();
            }
        });
        this.button21.mousePressed(() => {
            if (gameState == 5) {
                gameState = 23;
                this.button18.hide();
                this.button19.hide();
                this.button20.hide();
                this.button21.hide();
                this.button22.hide();
                this.button23.hide();
                this.button24.hide();
                this.button25.hide();
                this.button26.hide();
                this.button27.hide();
                this.button55.show();
            }
        });
        this.button22.mousePressed(() => {
            if (gameState == 5) {
                gameState = 24;
                this.button18.hide();
                this.button19.hide();
                this.button20.hide();
                this.button21.hide();
                this.button22.hide();
                this.button23.hide();
                this.button24.hide();
                this.button25.hide();
                this.button26.hide();
                this.button27.hide();
                this.button55.show();
            }
        });
        this.button55.mousePressed(() => {
            if (gameState != 2 && gameState != 0)
                gameState = 5;
            this.button3.hide();
            this.button8.hide();
            this.button17.hide();
            this.button28.hide();
            this.button33.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button9.hide();
            this.button10.hide();
            this.button11.hide();
            this.button12.hide();
            this.button13.hide();
            this.button14.hide();
            this.button15.hide();
            this.button16.hide();
            this.button18.show();
            this.button19.show();
            this.button20.show();
            this.button21.show();
            this.button22.show();
            this.button23.show();
            this.button24.show();
            this.button25.show();
            this.button26.show();
            this.button27.show();
            this.button29.hide();
            this.button30.hide();
            this.button31.hide();
            this.button32.hide();
            this.button34.hide();
            this.button35.hide();
            this.button36.hide();
            this.button37.hide();
            this.button38.hide();
            this.button39.hide();
            this.button40.hide();
            this.button41.hide();
            this.button42.hide();
            this.button53.hide();
            this.button54.hide();
            this.button55.hide();
            this.button56.hide();
            this.button57.hide();
            this.button42.hide();
            firstPageNot.setVisibleEach(false);
        });
        this.button29.mousePressed(() => {
            if (gameState == 6) {
                gameState = 30;
                this.button29.hide();
                this.button30.hide();
                this.button31.hide();
                this.button32.hide();
                this.button56.show();
            }
        });
        this.button30.mousePressed(() => {
            if (gameState == 6) {
                gameState = 31;
                this.button29.hide();
                this.button30.hide();
                this.button31.hide();
                this.button32.hide();
                this.button56.show();
            }
        });
        this.button31.mousePressed(() => {
            if (gameState == 6) {
                gameState = 32;
                this.button29.hide();
                this.button30.hide();
                this.button31.hide();
                this.button32.hide();
                this.button56.show();
            }
        });
        this.button32.mousePressed(() => {
            if (gameState == 6) {
                gameState = 33;
                this.button29.hide();
                this.button30.hide();
                this.button31.hide();
                this.button32.hide();
                this.button56.show();
            }
        });
        this.button56.mousePressed(() => {
            if (gameState != 2 && gameState != 0)
                gameState = 6;
            this.button3.hide();
            this.button8.hide();
            this.button17.hide();
            this.button28.hide();
            this.button33.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button9.hide();
            this.button10.hide();
            this.button11.hide();
            this.button12.hide();
            this.button13.hide();
            this.button14.hide();
            this.button15.hide();
            this.button16.hide();
            this.button18.hide();
            this.button19.hide();
            this.button20.hide();
            this.button21.hide();
            this.button22.hide();
            this.button23.hide();
            this.button24.hide();
            this.button25.hide();
            this.button26.hide();
            this.button27.hide();
            this.button29.show();
            this.button30.show();
            this.button31.show();
            this.button32.show();
            this.button34.hide();
            this.button35.hide();
            this.button36.hide();
            this.button37.hide();
            this.button38.hide();
            this.button39.hide();
            this.button40.hide();
            this.button41.hide();
            this.button42.hide();
            this.button53.hide();
            this.button54.hide();
            this.button55.hide();
            this.button56.hide();
            this.button57.hide();
            this.button42.hide();
            firstPageNot.setVisibleEach(false);
        });

        this.button34.mousePressed(() => {
            if (gameState == 7) {
                gameState = 34;
                this.button34.hide();
                this.button35.hide();
                this.button36.hide();
                this.button37.hide();
                this.button38.hide();
                this.button39.hide();
                this.button40.hide();
                this.button41.hide();
                this.button57.show();
            }
        });
        this.button35.mousePressed(() => {
            if (gameState == 7) {
                gameState = 35;
                this.button34.hide();
                this.button35.hide();
                this.button36.hide();
                this.button37.hide();
                this.button38.hide();
                this.button39.hide();
                this.button40.hide();
                this.button41.hide();
                this.button57.show();
            }
        });
        this.button36.mousePressed(() => {
            if (gameState == 7) {
                gameState = 36;
                this.button34.hide();
                this.button35.hide();
                this.button36.hide();
                this.button37.hide();
                this.button38.hide();
                this.button39.hide();
                this.button40.hide();
                this.button41.hide();
                this.button57.show();
            }
        });
        this.button37.mousePressed(() => {
            if (gameState == 7) {
                gameState = 37;
                this.button34.hide();
                this.button35.hide();
                this.button36.hide();
                this.button37.hide();
                this.button38.hide();
                this.button39.hide();
                this.button40.hide();
                this.button41.hide();
                this.button57.show();
            }
        });
        this.button38.mousePressed(() => {
            if (gameState == 7) {
                gameState = 38;
                this.button34.hide();
                this.button35.hide();
                this.button36.hide();
                this.button37.hide();
                this.button38.hide();
                this.button39.hide();
                this.button40.hide();
                this.button41.hide();
                this.button57.show();
            }
        });
        this.button39.mousePressed(() => {
            if (gameState == 7) {
                gameState = 39;
                this.button34.hide();
                this.button35.hide();
                this.button36.hide();
                this.button37.hide();
                this.button38.hide();
                this.button39.hide();
                this.button40.hide();
                this.button41.hide();
                this.button57.show();
            }
        });
        this.button40.mousePressed(() => {
            if (gameState == 7) {
                gameState = 40;
                this.button34.hide();
                this.button35.hide();
                this.button36.hide();
                this.button37.hide();
                this.button38.hide();
                this.button39.hide();
                this.button40.hide();
                this.button41.hide();
                this.button57.show();
            }
        });
        this.button41.mousePressed(() => {
            if (gameState == 7) {
                gameState = 41;
                this.button34.hide();
                this.button35.hide();
                this.button36.hide();
                this.button37.hide();
                this.button38.hide();
                this.button39.hide();
                this.button40.hide();
                this.button41.hide();
                this.button57.show();
            }
        });
        this.button57.mousePressed(() => {
            if (gameState != 2 && gameState != 0)
                gameState = 7;
            this.button3.hide();
            this.button8.hide();
            this.button17.hide();
            this.button28.hide();
            this.button33.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button9.hide();
            this.button10.hide();
            this.button11.hide();
            this.button12.hide();
            this.button13.hide();
            this.button14.hide();
            this.button15.hide();
            this.button16.hide();
            this.button18.hide();
            this.button19.hide();
            this.button20.hide();
            this.button21.hide();
            this.button22.hide();
            this.button23.hide();
            this.button24.hide();
            this.button25.hide();
            this.button26.hide();
            this.button27.hide();
            this.button29.hide();
            this.button30.hide();
            this.button31.hide();
            this.button32.hide();
            this.button34.show();
            this.button35.show();
            this.button36.show();
            this.button37.show();
            this.button38.show();
            this.button39.show();
            this.button40.show();
            this.button41.show();
            this.button53.hide();
            this.button54.hide();
            this.button55.hide();
            this.button56.hide();
            this.button57.hide();
            this.button42.hide();
            firstPageNot.setVisibleEach(false);
        });
    }
}