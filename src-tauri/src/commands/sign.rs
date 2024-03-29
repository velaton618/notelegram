use crate::TELEGRAM;

#[tauri::command]
pub async fn request_code(phone: &str) -> Result<(), ()> {
    let mut telegram = TELEGRAM.lock().await;
    telegram.as_mut().unwrap().request_code(phone).await;

    Ok(())
}

#[tauri::command]
pub async fn sign_in(code: &str) -> Result<usize, ()> {
    let telegram = TELEGRAM.lock().await;
    let dialogs_amount = telegram.as_ref().unwrap().sign_in(code).await;

    Ok(dialogs_amount)
}
