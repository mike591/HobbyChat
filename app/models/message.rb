class Message < ApplicationRecord
  belongs_to :user
  belongs_to :board

  after_commit { BroadcastMessageJob.perform_later(self) }
end
