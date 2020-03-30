class Lang {

    zh_CN = {
        project: {
            title: "合约详情",
            contractAddress: "合约地址",
            balanceSero: "当前余额 (SERO)",
        },

        account: {
            title: {
                utxo: "钱包账户",
                contract: "合约账户",
                swith: "切换账户",
                balanceSero: "余额 (SERO)",
                estimatedTotal: "预计总收益 (SERO)",
                dayIncome: "当天返还比例",
                staticIncome: "当天静态返还 (SERO)",
                withdraw: "可提现金额 (SERO)",
                detail: "详情",
                id: "编号",
                referId: "推荐人编号",
                areaId: "大区编号",
                totalInvest: "本金",
                profitLevel: "收益倍数",
                latestTime: "最新收益时间",
                totalReturn: "当前返还总数(SERO)",
                totalReturnDay: "当天返还总数(SERO)",
                recommend: "下级人数",
                staticIncomeTips: "今天的静态收益已经支付到可提现账户.",
                staticIncomeTips2: "触发收益到提现账户.",
                investDetail: "投资详情",
                myIncome: "我的业绩",
                areaTotal: "大区业绩",
                areaOtherTotal: "业绩总和(不含大区)",

                staticReward: "静态返还",
                recommendReward: "推荐奖",
                nobilityReward: "星级奖",
                vipReward: "VIP奖",
                viewCode: "查看智能合约",

            },
            button: {
                deposit: "充值",
                invest: "投资",
                trigger: "触发收益",
                withdraw: "提现",
                close: "关闭",
                copy: "拷贝",
            },
            modal: {
                deposit: {
                    title: "充值",
                    copy: "拷贝",
                },

                invest: {
                    title: "投资",
                    referId: "推荐人编号",
                    amount: "投资金额",
                    amountTips: "10 SERO起投",
                    availableSERO: "可用的余额",
                    total: "应付合计",
                    estimate: "预计收益",
                    password: "账户密码",
                    passwordPlace: "输入账户密码",
                },

                trigger: {
                    password: "账户密码",
                    passwordPlace: "输入账户密码",
                },

                withdraw: {
                    password: "账户密码",
                    passwordPlace: "输入账户密码",
                    tips: "* 提现金额将直接提到UTXO账户.",
                },
            },
        },
        toast: {
            lessAmount: "SERO余额不足以支付本次交易.",
            minInvest: "最小投资金额为 10 SERO.",
            tx: "交易提交成功, 等待区块打包交易, 交易哈希: ",
            copySuccess: "拷贝成功! ",

        }
    };

    en_US = {
        project: {
            title: "Contract Info",
            contractAddress: "Contract Address",
            balanceSero: "Current Balance (SERO)",
        },

        account: {
            title: {
                utxo: "Wallet Account",
                contract: "Contract Account",
                swith: "Switch Account",
                balanceSero: "Balance (SERO)",
                estimatedTotal: "Estimated Total Income (SERO)",
                dayIncome: "Return rate on the day",
                staticIncome: "Static Return (SERO)",
                withdraw: "Withdrawal Account (SERO)",
                detail: "Detail",
                id: "ID",
                referId: "Refer ID",
                areaId: "Large Area ID",
                totalInvest: "Total Invest",
                profitLevel: "Profit Level",
                latestTime: "Latest Share Time",
                totalReturn: "Total Return",
                totalReturnDay: "Total return on the day (SERO)",
                recommend: "Recommend Number",
                staticIncomeTips: "Your income have been paid to the withdrawal account.",
                staticIncomeTips2: "Trigger to withdrawal account. ",
                investDetail: "Invest Info",
                myIncome: "My performance",
                areaTotal: "Regional performance",
                areaOtherTotal: "Total performance (excluding the large region)",

                staticReward: "Static",
                recommendReward: "Recommend",
                nobilityReward: "Nobility",
                vipReward: "VIP",
                viewCode: "View Smart Contract",
            },
            button: {
                deposit: "Deposit SERO",
                invest: "Invest",
                trigger: "Trigger Income",
                withdraw: "Withdraw",
                close: "Close",
                copy: "Copy",
            },
            modal: {
                deposit: {
                    title: "Deposit",
                    copy: "COPY",
                },

                invest: {
                    title: "Invest",
                    referId: "Refer ID",
                    ticket: "Tickets",
                    amount: "Invet Amount",
                    amountTips: "At least invest 10 SERO",
                    availableSERO: "Available Blance",
                    availableExchange: "Max Exchange",
                    total: "Total",
                    estimate: "Estimated Return",
                    password: "Password",
                },

                trigger: {
                    password: "Password",
                },

                withdraw: {
                    password: "Password",
                    tips: "* This is the withdrawal of the amount to the UTXO account.",
                },
            },
        },
        toast: {
            lessAmount: "The balance is not enough to pay for this transaction.",
            minInvest: "Invest Amount at least 10 SERO.",
            tx: "The transaction was submitted successfully, waiting for the block to be packaged, and the transaction hash: ",
            copySuccess: "Copy to clipboard successfully! ",
        },
    }

    be_BY = {
        project: {
            title: "Детали контракта",
            contractAddress: "Адрес контракта",
            balanceSero: "Текущий баланс (SERO)",
        },

        account: {
            title: {
                utxo: "Счет кошелька",
                contract: "Контокоррентный счет",
                swith: "Сменить аккаунт",
                balanceSero: "Баланс (SERO)",
                estimatedTotal: "Расчетный общий доход (SERO)",
                dayIncome: "День Доход",
                staticIncome: "Фиксированный доход дня (SERO)",
                withdraw: "Доступен вывод средств (SERO)",
                detail: "подробности",
                id: "Число",
                referId: "Идентификатор реферера",
                areaId: "ID региона",
                totalInvest: "Основная сумма",
                profitLevel: "Многократный доход",
                latestTime: "Время последнего дохода",
                totalReturn: "Всего текущих возвратов (SERO)",
                totalReturnDay: "Всего возвращено в день (SERO)",
                recommend: "Количество рефералов",
                staticIncomeTips: "Сегодняшний фиксированный доход выплачивается на счет снятия",
                staticIncomeTips2: "Триггер доход на счет вывода",
                investDetail: "Детали инвестирования",
                myIncome: "Мое выступление",
                areaTotal: "Региональный спектакль",
                areaOtherTotal: "Общий доход (кроме региональных)",

                staticReward: "Фиксированный доход",
                recommendReward: "реферальные вознаграждения",
                nobilityReward: "Звездная награда",
                vipReward: "VIP Награда",
                viewCode: "Посмотреть смарт-контракт",

            },
            button: {
                deposit: "депозит",
                invest: "инвестиции",
                trigger: "Триггер доход",
                withdraw: "Снять со счета",
                close: "близко",
                copy: "копия",
            },
            modal: {
                deposit: {
                    title: "депозит",
                    copy: "копия",
                },

                invest: {
                    title: "инвестиции",
                    referId: "Идентификатор реферера",
                    amount: "Сумма инвестиций",
                    amountTips: "Начинает кастовать 10 SERO",
                    availableSERO: "доступные средства",
                    total: "Всего к оплате",
                    estimate: "Расчетный доход",
                    password: "Пароль от аккаунта",
                    passwordPlace: "Введите пароль учетной записи",
                },

                trigger: {
                    password: "Пароль от аккаунта",
                    passwordPlace: "Введите пароль учетной записи",
                },

                withdraw: {
                    password: "Пароль от аккаунта",
                    passwordPlace: "Введите пароль учетной записи",
                    tips: "* Вывод средств будет производиться непосредственно на счет UTXO.",
                },
            },
        },
        toast: {
            lessAmount: "Баланса SERO недостаточно для покрытия этой транзакции.",
            minInvest: "Минимальная сумма инвестиций составляет 10 SERO.",
            tx: "Предоставление транзакции успешный, ожидание транзакции блока упаковки, хэш транзакции: ",
            copySuccess: "Успешно скопировано",

        }
    };

    ko_KR = {
        project: {
            title: "계약세부",
            contractAddress: "계약 주소",
            balanceSero: "현재 잔액 (SERO)",
        },

        account: {
            title: {
                utxo: "월렛 계정",
                contract: "계약 계정",
                swith: "계정 변경",
                balanceSero: "밸런스 (SERO)",
                estimatedTotal: "총 예상 수익 (SERO)",
                dayIncome: "당일 수익률",
                staticIncome: "고정 수입 (SERO)",
                withdraw: "출금 금액 가능 (SERO)",
                detail: "세부",
                id: "번호",
                referId: "리퍼러 ID",
                areaId: "지역 ID",
                totalInvest: "교장",
                profitLevel: "여러 수입",
                latestTime: "마지막 소득 시간",
                totalReturn: "총 전류 리턴 (SERO)",
                totalReturnDay: "하루에 반환 된 총액 (SERO)",
                recommend: "부하 직원 수",
                staticIncomeTips: "인출 계좌로 지급되는 오늘의 고정 수입",
                staticIncomeTips2: "인출 계좌로 수입 트리거",
                investDetail: "투자세부",
                myIncome: "내 공연",
                areaTotal: "지역 성과",
                areaOtherTotal: "총 실적 (지역 제외)",

                staticReward: "고정 수입",
                recommendReward: "추천 보상",
                nobilityReward: "별 보상",
                vipReward: "VIP 보상",
                viewCode: "스마트 계약서보기",

            },
            button: {
                deposit: "예금",
                invest: "투자",
                trigger: "트리거 수익",
                withdraw: "철수",
                close: "닫기",
                copy: "복사",
            },
            modal: {
                deposit: {
                    title: "예금",
                    copy: "복사",
                },

                invest: {
                    title: "투자",
                    referId: "리퍼러 ID",
                    amount: "투자 금액",
                    amountTips: "10 SERO 시작",
                    availableSERO: "사용 가능한 잔액",
                    total: "총 지불",
                    estimate: "추정 소득",
                    password: "계정 암호",
                    passwordPlace: "계정 비밀번호 입력",
                },

                trigger: {
                    password: "계정 암호",
                    passwordPlace: "계정 비밀번호 입력",
                },

                withdraw: {
                    password: "계정 암호",
                    passwordPlace: "계정 비밀번호 입력",
                    tips: "* 출금은 UTXO 계정으로 직접 이루어집니다.",
                },
            },
        },
        toast: {
            lessAmount: "이 거래를 처리하기에 SERO 잔액이 부족합니다.",
            minInvest: "최소 투자 금액은 10 SERO입니다.",
            tx: "트랜잭션 제출 완료, 블록 패키징 트랜잭션 대기 중, 트랜잭션 해시 : ",
            copySuccess: "성공적으로 복사",

        }
    };

    ja_JP = {
        project: {
            title: "契約詳細",
            contractAddress: "契約住所",
            balanceSero: "現在の残高（SERO）",
        },

        account: {
            title: {
                utxo: "ウォレットアカウント",
                contract: "契約アカウント",
                swith: "アカウントを切り替える",
                balanceSero: "バランス（SERO）",
                estimatedTotal: "推定総収益（SERO）",
                dayIncome: "同日の返品率",
                staticIncome: "毎日の静的収入（SERO）",
                withdraw: "引き出し可能な現金（SERO）",
                detail: "細部",
                id: "数",
                referId: "リファラーID",
                areaId: "地域ID",
                totalInvest: "主要な",
                profitLevel: "複数の収益",
                latestTime: "最新の収益時間",
                totalReturn: "返品合計（SERO）",
                totalReturnDay: "当日のトータルリターン（SERO）",
                recommend: "紹介の数",
                staticIncomeTips: "今日の静的収益は引き出し口座に支払われました",
                staticIncomeTips2: "引き出し口座に収益をトリガー",
                investDetail: "投資の詳細",
                myIncome: "私のパフォーマンス",
                areaTotal: "地区のパフォーマンス",
                areaOtherTotal: "パフォーマンスの合計（地域を除く）",

                staticReward: "静的リターン",
                recommendReward: "紹介報酬",
                nobilityReward: "スター賞",
                vipReward: "VIP報酬",
                viewCode: "スマートコントラクトを表示",

            },
            button: {
                deposit: "預り金",
                invest: "投資",
                trigger: "トリガー収益",
                withdraw: "引き出す",
                close: "閉じる",
                copy: "複写",
            },
            modal: {
                deposit: {
                    title: "預り金",
                    copy: "複写",
                },

                invest: {
                    title: "投資",
                    referId: "リファラーID",
                    amount: "投資額",
                    amountTips: "10 SERO開始",
                    availableSERO: "利用可能残高",
                    total: "お支払い総額",
                    estimate: "推定収入",
                    password: "アカウントパスワード",
                    passwordPlace: "アカウントのパスワードを入力してください",
                },

                trigger: {
                    password: "アカウントパスワード",
                    passwordPlace: "アカウントのパスワードを入力してください",
                },

                withdraw: {
                    password: "アカウントパスワード",
                    passwordPlace: "アカウントのパスワードを入力してください",
                    tips: "※引き出しはUTXO口座に直接行われます。",
                },
            },
        },
        toast: {
            lessAmount: "SERO残高はこのトランザクションをカバーするのに十分ではありません。",
            minInvest: "最小投資額は10 SEROです。",
            tx: "トランザクション送信が成功し、ブロックパッケージングトランザクションを待機しています、トランザクションハッシュ： ",
            copySuccess: "正常にコピーされました",

        }
    };
}

export default Lang