'use strict';

import '@alife/vext-demo-helper/lib/index.scss';


import Vue from 'vue';
import { vDemo, vDemoGroup, initDemo } from '@alife/vext-demo-helper';
import tag from '../../src/tag/index';
import '../../src/tag/index.scss';

let DEMO;

window.renderDemo = function (lang) {
    lang = lang || 'en-us';

    if (!DEMO) {
        DEMO = new Vue({
            el: '#theme-container', // 渲染节点固定为此
            data() {
                return {
                    lang,
                    locale: ({
                        'zh-cn': {
                            button: '标签文字'
                        },
                        'en-us': {
                            button: 'Tag Text'
                        }
                    })
                }
            },
            template: `<v-demo name="Button">
                <v-demo name="尺寸" :cols="['Default', 'Medium', 'Small', 'Mini']">
                    <v-demo-group name="不同尺寸">
                    <el-tag slot="Default">{{locale[lang].button}}</el-tag>
                    <el-tag size="medium" slot="Medium">{{locale[lang].button}}</el-tag>
                    <el-tag size="small" slot="Small">{{locale[lang].button}}</el-tag>
                    <el-tag size="mini" slot="Mini">{{locale[lang].button}}</el-tag>
                    </v-demo-group>
                </v-demo>
                <v-demo name="类型" :cols="['Default', 'Success', 'Info', 'Warning', 'Danger']">
                    <v-demo-group name="不同类型">
                    <el-tag slot="Default">{{locale[lang].button}}</el-tag>
                    <el-tag type="success" slot="Success">{{locale[lang].button}}</el-tag>
                    <el-tag type="info" slot="Info">{{locale[lang].button}}</el-tag>
                    <el-tag type="warning" slot="Warning">{{locale[lang].button}}</el-tag>
                    <el-tag type="danger" slot="Danger">{{locale[lang].button}}</el-tag>
                    </v-demo-group>
                </v-demo>
            </v-demo>`,
            components: {
                'v-demo': vDemo,
                'v-demo-group': vDemoGroup,
                'el-tag': tag
            }
        });
    } else {
        Vue.set(DEMO, 'lang', lang);
    }
};

renderDemo();
initDemo('button');
