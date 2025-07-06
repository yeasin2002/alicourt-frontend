"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BookOpen, Calendar, MoreHorizontal, Plus } from "lucide-react";

export function Sidebar() {
  const recentPlans = ["Last Plan", "Last Plan", "Last Plan"];
  const saveClass = ["Last chat", "Last chat", "Last chat"];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-xl font-semibold text-gray-800">gameplan</span>
        </div>
      </div>

      {/* Main Actions */}
      <div className="p-4 space-y-3">
        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full h-10">
          <Plus className="h-4 w-4 mr-2" />
          New Plans
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start h-10 text-gray-700"
        >
          <Calendar className="h-4 w-4 mr-3" />
          Calendar
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start h-10 text-gray-700"
        >
          <BookOpen className="h-4 w-4 mr-3" />
          Create Class
        </Button>
      </div>

      {/* Recent Plans */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800">Recent plans</h3>
          <Select defaultValue="all">
            <SelectTrigger className="w-24 h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Plans</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          {recentPlans.map((plan, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded"
            >
              <span className="text-gray-700">{plan}</span>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Save Class */}
      <div className="px-4 py-2 flex-1">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-gray-800">Save Class</h3>
          <Select defaultValue="all">
            <SelectTrigger className="w-24 h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Plans</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          {saveClass.map((chat, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 px-2 hover:bg-gray-50 rounded"
            >
              <span className="text-gray-700">{chat}</span>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Upgrade Button */}
      <div className="p-4 border-t border-gray-200">
        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full h-10">
          Upgrade To Pro
        </Button>
      </div>
    </div>
  );
}
