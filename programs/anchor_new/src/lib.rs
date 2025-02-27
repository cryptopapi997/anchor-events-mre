use anchor_lang::prelude::*;

declare_id!("FMzneBGhuqGmse5tb6DJL96Rc6bxbnRDxCLhiXtaxbdu");

#[program]
pub mod anchor_new {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        emit!(MyEvent {});
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

#[event]
pub struct MyEvent {}
