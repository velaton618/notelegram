#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::env;

use helpers::telegram::Telegram;
use lazy_static::lazy_static;
use log::error;
use tokio::sync::Mutex;

mod helpers;
mod commands;

lazy_static! {
    pub static ref TELEGRAM: Mutex<Option<Telegram>> = Mutex::new(None);
}

async fn initialize() {
    dotenv::dotenv().ok();
    env::set_var("RUST_LOG", "error");

    pretty_env_logger::init();

    let mut telegram = TELEGRAM.lock().await;
    *telegram = Some(
        Telegram::new(
            env
                ::var("API_ID")
                .map_err(|err| {
                    error!("Failed to get API_ID: {}", err);
                })
                .unwrap()
                .parse()
                .unwrap(),
            env
                ::var("API_HASH")
                .map_err(|err| {
                    error!("Failed to get API_HASH: {}", err);
                })
                .unwrap()
                .to_string()
        ).await
    );

    // let api_id = env::var("API_ID").unwrap().parse().unwrap();
    // let api_hash = env::var("API_HASH").unwrap().to_string();

    // let mut client = CLIENT.lock().await;
    // *client = Some(
    //     Client::connect(Config {
    //         session: Session::load_file_or_create("omegram.session").unwrap(),
    //         api_id,
    //         api_hash: api_hash.clone(),
    //         params: Default::default(),
    //     }).await.unwrap()
    // );
}

#[tokio::main]
async fn main() {
    initialize().await;

    tauri::Builder
        ::default()
        .invoke_handler(
            tauri::generate_handler![
                commands::sign::request_code,
                commands::sign::request_qrcode,
                commands::sign::sign_in,
                commands::sign::get_update
            ]
        )
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
