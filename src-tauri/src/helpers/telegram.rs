use grammers_client::{ Client, Config, InitParams };
use grammers_session::Session;

pub struct Telegram {
    pub client: Client,
}

impl Telegram {
    pub async fn new(api_id: i32, api_hash: String) -> Self {
        let client = Client::connect(Config {
            session: Session::load_file_or_create("data/notelegram.session").unwrap(),
            api_hash: api_hash,
            api_id: api_id,
            params: InitParams::default(),
        }).await.unwrap();

        Self {
            client: client,
        }
    }
}
