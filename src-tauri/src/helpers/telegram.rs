use std::env;

use grammers_client::{ types::LoginToken, Client, Config, InitParams };
use grammers_session::Session;

pub struct Telegram {
    pub client: Client,
    pub token: Option<LoginToken>,
}

impl Telegram {
    pub async fn new(api_id: i32, api_hash: String) -> Self {
        let client = Client::connect(Config {
            session: Session::load_file_or_create("notelegram.session").unwrap(),
            api_hash: api_hash,
            api_id: api_id,
            params: InitParams::default(),
        }).await.unwrap();

        Self {
            client: client,
            token: None,
        }
    }

    pub async fn request_code(&mut self, phone: &str) {
        self.token = Some(match self.client.request_login_code(phone).await {
            Ok(t) => t,
            Err(_) => {
                let api_id = env::var("API_ID").unwrap().parse().unwrap();
                let api_hash = env::var("API_HASH").unwrap().to_string();

                self.client = Client::connect(Config {
                    session: Session::load_file_or_create("omegram.session").unwrap(),
                    api_id,
                    api_hash: api_hash.clone(),
                    params: Default::default(),
                }).await.unwrap();
                self.client.request_login_code(phone).await.unwrap()
            }
        });
    }

    pub async fn sign_in(&self, code: &str) -> usize {
        self.client.sign_in(self.token.as_ref().unwrap(), code).await.unwrap();

        match self.client.session().save_to_file("notelegram.session") {
            Ok(_) => {}
            Err(_e) => {}
        }

        let mut dialogs = self.client.iter_dialogs();

        dialogs.total().await.unwrap()
    }
}
